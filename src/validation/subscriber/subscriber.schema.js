const {validade, ValidationError, Joi} = require('express-validation')

const createSubscriberValidation = {
    subscriber:Joi.object({
        userName: Joi.string().required(),
        userEmail: Joi.string().email().required()
    })
} 