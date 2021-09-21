const express = require("express");

const createError = require("http-errors");
const schemas = require("../../middlewares/validation/schema");
const validation = require("../../middlewares/validation");
const isAuthorized = require("../../middlewares/authorization");
const DB = require("../../models");

const router = express.Router();

// Get all Users
router.get("/users-list", async (req, res, next) => {
  try {
    const users = await DB.User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return next(createError(400, err));
  }
});

// Add new user
router.post(
  "/create-user",
  validation(schemas.createUser, "body"),
  async (req, res, next) => {
    try {
      // eslint-disable-next-line camelcase
      const { first_name, last_name, email, role, password, status } = req.body;
      const findUser = await DB.User.findOne({ where: { email } });
      if (findUser) {
        next(createError(400, { message: "user does not exist!" }));
      }
      const user = await DB.User.create({
        first_name,
        last_name,
        email,
        role,
        password,
        status,
      });
      return res.status(201).send(user);
    } catch (err) {
      return next(createError(400, err));
    }
  }
);

// uodate user info
router.put(
  "/:id",
  validation(schemas.UpdateUser, "body"),
  async (req, res, next) => {
    try {
      const findUser = await DB.User.findOne({ where: { id: req.params.id } });
      if (!findUser) {
        next(createError(400, { message: "user does not exist!" }));
      }
      const user = await DB.User.update(req.body);
      return res.status(200).send({
        user,
      });
    } catch (err) {
      return next(createError(400, err));
    }
  }
);

// delete user
router.delete("/:id", isAuthorized("admin"), async (req, res, next) => {
  try {
    const findUser = await DB.User.findOne({ where: { id: req.params.id } });
    if (!findUser) {
      next(createError(400, { message: "user does not exist!" }));
    }
    await DB.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send({ msg: "User successfully deleted!" });
  } catch (err) {
    return next(createError(400, err));
  }
});

module.exports = router;
