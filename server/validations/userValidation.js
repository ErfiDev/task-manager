const joi = require("joi");

const registerValidation = (data) => {
  const schema = joi.object({
    username: joi.string().min(4).max(30).required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .required(),
    tasks: joi.array().items(
      joi.object({
        title: joi.string().required(),
        status: joi.boolean().required(),
        endTime: joi.date().min("now"),
      })
    ),
    isAdmin: joi.boolean().required(),
    picture: joi.string().required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = joi.object({
    username: joi.string().min(4).max(30).required(),
    password: joi.string().min(8).required(),
  });

  return schema.validate(data);
};

const taskValidation = (data) => {
  const schema = joi.object({
    title: joi.string().required(),
    status: joi.boolean().required(),
    endTime: joi.date().min("now"),
  });

  return schema.validate(data);
};

const editTaskValidation = (data) => {
  const schema = joi.object({
    title: joi.string(),
    status: joi.boolean(),
    endTime: joi.date().min("now"),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  taskValidation,
  editTaskValidation,
};
