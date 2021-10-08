const { Setting } = require("../models");
const { successResponse, errorResponse } = require("../helpers/responseHelper");

const updateSettings = async (req, res, _next) => {
  try {
    let { settings } = req.body;
    let updated = 0;
    settings.forEach(async (element) => {
      let { key, value } = element;

      const response = await Setting.update(
        { value },
        { where: { key }, returning: true, plain: true }
      );
      if (response[0] > 0) {
        updated += 1;
      }
    });
    settings = await Setting.findAll();
    return successResponse(req, res, {
      settings,
      msg: `${updated} Settings Updated`,
    });
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

const getSettings = async (req, res, _next) => {
  try {
    let settings = await Setting.findAll();
    return successResponse(req, res, {
      settings,
      msg: `Settings Listing success`,
    });
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

module.exports = {
  updateSettings,
  getSettings,
};
