import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  fullname: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minLength: 6
  },

  profilePic: {
    type: String,
    default: ''
  },

  bio: {
    type: String,
    maxlength: 100,
    default: ""
  }
}, {
  timestamps: true
})

const User = model('User', userSchema)

export default User