const Joi = require("joi");

const create = {
  body: Joi.object().keys({
    owner_uuid: Joi.string().required(),
    car_type_uuid: Joi.string().required(),
    description: Joi.string().optional(),
    status: Joi.string().required(),
    rate: Joi.number().required(),
    feedback_score: Joi.number().optional(),
    feedbacks_count: Joi.number().optional(),
    discount: Joi.number().optional(),
    discount_till: Joi.date().optional(),
  }),
};

module.exports = {
  create,
};
