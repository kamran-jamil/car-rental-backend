const express = require("express");
const schemas = require("../../middlewares/validation/schema");
const validation = require("../../middlewares/validation");
// const logger = require("../../middlewares/logger");
// const isAuthorized = require("../../middlewares/authorization");
const {
  successResponseHandler,
  errorResponseHandler,
} = require("../../middlewares/response-handler");
const DB = require("../../models");

const router = express.Router();

// Get all Users
router.get("/users-list", async (req, res) => {
  try {
    const users = await DB.User.findAll();
    return successResponseHandler(req, res, users);
  } catch (err) {
    return errorResponseHandler(req, res, err, 400);
  }
});

// Add new user
router.post(
  "/create-user",
  validation(schemas.createUser, "body"),
  async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { first_name, last_name, email, role, password, status } = req.body;
      const findUser = await DB.User.findOne({ where: { email } });
      if (findUser) {
        return errorResponseHandler(req, res, "User already exist!", 400);
      }
      const user = await DB.User.create({
        first_name,
        last_name,
        email,
        role,
        password,
        status,
      });
      return successResponseHandler(req, res, user);
    } catch (err) {
      // logger.error(err);
      return errorResponseHandler(req, res, err, 400);
    }
  }
);

// uodate user info
router.put("/:id", validation(schemas.UpdateUser, "body"), async (req, res) => {
  try {
    const findUser = await DB.User.findOne({ where: { id: req.params.id } });
    if (!findUser) {
      errorResponseHandler(req, res, "User not found!", 400);
    }
    const user = await DB.User.update(req.body);
    return successResponseHandler(req, res, user);
  } catch (err) {
    return errorResponseHandler(req, res, err, 400);
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const findUser = await DB.User.findOne({ where: { id: req.params.id } });
    if (!findUser) {
      return errorResponseHandler(req, res, "User not found!", 404);
    }
    await DB.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponseHandler(req, res, {
      message: "User successfully deleted!",
    });
  } catch (err) {
    return errorResponseHandler(req, res, err, 404);
  }
});

module.exports = router;
