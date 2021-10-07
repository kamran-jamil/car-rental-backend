const Joi = require("joi");

const updateSettings = {
  body: Joi.object().keys({
    settings: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required(),
      })
    ),
  }),
};

const getSettings = {
  body: Joi.object().keys({}),
};

module.exports = {
  updateSettings,
  getSettings,
};
