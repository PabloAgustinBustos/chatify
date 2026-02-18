import Message from '../models/Message.model.js'
import User from '../models/User.model.js'
import cloudinary from "../lib/cloudinary.js"

export const getAllContacts = async (req, res) => {
  const myID = req.user._id

  try {
    const users = await User.find({ _id: { $ne: myID } }).select('profilePic fullname bio')

    res.status(200).json(users)
  } catch(e) {
    console.log('Error in getAllContacts', e)
    res.status(500).json({ message: 'Server error' })
  }
}

export const getMessagesByUserID = async (req, res) => {
  const myID = req.user._id
  const contactID = req.params.contactID

  try {
    const messages = await Message.find({ 
      $or: [
        { senderID: myID, receiverID: contactID },
        { senderID: contactID, receiverID: myID }
      ]
    }, null).limit(10).sort({ createdAt: -1 })

    return res.status(200).json(messages)
  } catch(e) {
    console.log('Error in getAllContacts', e)
    res.status(500).json({ message: 'Server error' })
  }
}

export const sendMessage = async (req, res) => {
  const myID = req.user._id
  const contactID = req.params.contactID
  const { text, image } = req.body

  if (!text && !image) return res.status(400).json({ message: 'text or image is required' })
  if (myID.equals(contactID)) return res.status(400).json({ message: 'cannot send message to yourself' })
  
  const receiverExists = await User.exists({ _id: contactID })

  if (!receiverExists) return res.status(404).json({ message: 'contact not found' })

  try {
    const uploadResponse = await cloudinary.uploader.upload(image)
    const imageURL = uploadResponse.secure_url

    const newMessage = new Message({
      senderID: myID,
      receiverID: contactID,
      text,
      image: imageURL
    })

    await newMessage.save()

    // todo: websockets

    return res.status(200).json(newMessage)
  } catch(e) {
    console.log('Error in getAllContacts', e)
    res.status(500).json({ message: 'Server error' })
  }
}

export const getChats = async (req, res) => {
  const myID = req.user._id

  try {
    const messages = await Message.find({
      $or: [
        { senderID: myID },
        { receiverID: myID }
      ]
    })

    const contactsID = [ 
      ...new Set(messages.map(msg => 
        msg.senderID.toString() === myID.toString()
        ? msg.receiverID.toString()
        : msg.senderID.toString()
      ))
    ]

    const chats = await User.find({ _id: {
      $in: contactsID
    } }).select('profilePic fullname')

    return res.status(200).json(chats)
  } catch (e) {
    console.log('Error in getAllContacts', e)
    res.status(500).json({ message: 'Server error' })
  }
}