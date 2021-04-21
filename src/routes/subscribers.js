const router = require('express').Router()

const { 
    getSubscriberById,
    getAll,
    createSubscriber
 } = require("../controllers/subscriberController")


router.get("/",getAll)
router.post("/",createSubscriber)
router.get("/:id",getSubscriberById)


module.exports =router
