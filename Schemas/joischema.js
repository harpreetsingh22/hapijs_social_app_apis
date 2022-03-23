const Joi = require('@hapi/joi');

const schema = Joi.object({

    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required() ,
    firstname:Joi.string().min(5).max(15).required() ,
    lastname:Joi.string().min(5).max(15).required() ,
    phone:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password:Joi.string().min(8).required() ,
    DOB:Joi.number().integer().max(1920).max(2004).required(),

});








module.exports=schema  ;