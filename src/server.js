require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const chatRoom = require('./models/chatRoom')
const subscribersRouter = require('./routes/subscribers')
const chatRoomRouter = require('./routes/chatroom')



app.use(express.json())

app.use('/subscribers', subscribersRouter)
app.use('/chatroom', chatRoomRouter)


mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', ()=> console.log('Database Connection'))

app.listen(3001, ()=> console.log('Server running!'))