const Joi = require("joi");

const schemas = {
  createUser: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.string().required(),
  }),
  UpdateUser: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    status: Joi.string().required(),
  }),
};
module.exports = schemas;
