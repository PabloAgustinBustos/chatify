import { sendWelcomeEmail } from "../emails/emailHandlers.js"
import cloudinary from "../lib/cloudinary.js"
import { ENV } from "../lib/env.js"
import { generateToken } from "../lib/utils.js"
import User from "../models/User.model.js"
import bcrypt from 'bcryptjs'

export const signup = async(req, res) => {
  const { fullname, email, password } = req.body

  // Validaciones
  if (!fullname || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters'
    })
  }

  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegEx.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }
  
  try {
    // Ver si ya existe el user
    const user = await User.findOne({ email })

    if (user) return res.status(400).json({ message: 'User with that email already exists' })

    // hasheo de contraseña
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Creación del user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword
    })

    if (newUser) {
      const savedUser = await newUser.save()
      
      // generación de jwt
      generateToken(savedUser._id, res)


      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePic: newUser.profilePic
      })

      try {
        sendWelcomeEmail(savedUser.email, savedUser.fullname, ENV.CLIENT_URL)
      } catch(e) {
        console.error('Failed to send welcome email')
      }
    } else {
      return res.status(400).json({ message: 'Invalid user data' })
    }
  } catch(e) {
    console.log('Error in signup', e)
    return res.status(500).json({e})
  }
}

export const login = async(req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' })

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials' })
    
    generateToken(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullanme: user.fullname,
      email: user.email,
      profilePic: user.profilePic
    })
  } catch(e) {
    console.error('Error in login', e)
    res.status(500).json({message: 'Internal server error'})
  }
}

export const logout = (_, res) => {
   res.cookie('jwt', '', { maxAge: 0 })
   res.status(200).json({ message: 'Logged out successfully' })
}

export const updateProfile = async(req, res) => {
  try {
    const { profilePic } = req.body
    if (!profilePic) return res.status(400).json({ message: 'Profile pic is required' })
    
    const userId = req.user._id

    const uploadResponse = await cloudinary.uploader.upload(profilePic)
    
    console.log(uploadResponse)

    const updatedUser = await User.findByIdAndUpdate(userId, { 
      profilePic: uploadResponse.secure_url 
    }, {new: true})

    res.status(200).json(updatedUser)
  } catch(e) {
    console.log('Error in update profile', e)

    res.status(500).json({ message: 'Internal server error' })
  }
}