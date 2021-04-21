const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    chatroom: {
        type:mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "chatRoom"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required: "Subscriber is required!",
        ref:"subscriber"
    },
    message: {
        type:String,
        required: "Message is required",
    },
  
})

module.exports = mongoose.model('chatRoom', messageSchema)