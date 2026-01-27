import { model, Schema, Types } from "mongoose";

export const messageSchema = new Schema({
  senderID: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  },
  receiverID : {
    type: Types.ObjectId,
    ref: "User",
    required: true
  },

  text: {
    type: String,
    trim: true,
    maxlength: 200
  },

  image: {
    type: String
  }
}, { timestamps: true })

const Message = model('Message', messageSchema)

export default Message