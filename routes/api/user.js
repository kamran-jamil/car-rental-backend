const express = require("express");
const auth = require("../../middlewares/auth");
const schemas = require("../../middlewares/validation/schema");
const validation = require("../../middlewares/validation");
const isAuthorized = require("../../middlewares/authorization");
const DB = require("../../models");

const router = express.Router();

// Get all Users
router.get("/users-list", auth, isAuthorized("admin"), async (req, res) => {
  try {
    const users = await DB.User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).send(err);
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
        res.status(400).send({ error: "user already exist!" });
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
      return res.status(400).send({ error: err });
    }
  }
);

// uodate user info
router.put("/:id", validation(schemas.UpdateUser, "body"), async (req, res) => {
  try {
    const findUser = await DB.User.findOne({ where: { id: req.params.id } });
    if (!findUser) {
      res.status(400).send({ error: "user does'nt exist!" });
    }
    const user = await DB.User.update(req.body);
    return res.status(200).send({
      user,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
});

// delete user
router.delete("/:id", isAuthorized("admin"), async (req, res) => {
  try {
    const findUser = await DB.User.findOne({ where: { id: req.params.id } });
    if (!findUser) {
      res.status(400).send({ error: "user does'nt exist!" });
    }
    await DB.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send({ msg: "User successfully deleted!" });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = router;
