const joi = require('joi');

const registerValidation = (data)=>{
    const schema = joi.object({
        username: joi.string().min(4).max(30).required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8),
        tasks: joi.array().items(
            joi.object({
                title: joi.string().required(),
                status: joi.boolean().required(),
                endTime: joi.date().min('now')
            })
        ),
        isAdmin: joi.boolean().required()
    });

    return schema.validate(data);
}

module.exports = {
    registerValidation
}