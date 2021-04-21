const router = require('express').Router()

const { createChatroom } = require("../controllers/chatroomController")

router.post("/",createChatroom)


module.exports =router
