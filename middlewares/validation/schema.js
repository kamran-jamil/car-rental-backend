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
  updateUser: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    status: Joi.string().required(),
  }),
  createClient: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    cnic: Joi.string().required(),
    gender: Joi.string().required(),
    is_verified: Joi.boolean().required(),
    password: Joi.string().required(),
    profile_pic: Joi.string().optional(),
    verified_at: Joi.string().optional(),
    referer_id: Joi.number().optional(),
    referred_at: Joi.string().optional(),
    account_status: Joi.string().required(),
  }),
};
module.exports = schemas;
