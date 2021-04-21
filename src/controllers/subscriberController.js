const Subscriber = require('../models/subscriber')


exports.createSubscriber = async (req, res)=> {
      const {userName, userChannel} = req.body
      const subscriber = new Subscriber({
          userName,
          userChannel
      })
      try {
          const newSubscriber = await subscriber.save()
          res.status(201).json(newSubscriber)
      } catch (error) {
          res.status(500).json({message: error.message})
      }
}

exports.getSubscriberById = async(req, res)=> {
    const { id } = req.params
    try {
        const subscriber = await Subscriber.findById(id)
        if(subscriber == null) {
            return res.status(404).json({message: 'Subscriber not found'})
        }
        res.status(200).json(subscriber)
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}

exports.getAll = async(req, res) => {
    try {
        const subscribers = await Subscriber.find() 
        res.json(subscribers)
      } catch (error) {
          res.status(500).json({message: error.message})   
      }
}