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
    // Ver si existe ya el user
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

      // todo: email notification
    } else {
      return res.status(400).json({ message: 'Invalid user data' })
    }
  } catch(e) {
    console.log('Error in signup', e)
    return res.status(500).json({e})
  }
}