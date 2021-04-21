const mongoose = require('mongoose')

const Chatroom = require('../models/chatRoom')

exports.createChatroom = async (req, res) => {
    const{ name } = req.body;
    const chatroom = new Chatroom({
        name
    })
    try {
        const newChatroom = await chatroom.save()
        res.status(201).json(newChatroom)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}