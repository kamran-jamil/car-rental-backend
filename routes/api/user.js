const express = require("express");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const sgMail = require("@sendgrid/mail");
const auth = require("../../middlewares/auth");
const isAuthorized = require("../../middlewares/authorization");
// const { Op } = require("sequelize");
const DB = require("../../models");

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line consistent-return
router.post("/login", async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json(error.details);
    }
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await DB.User.findOne({
      where: {
        email,
        password,
        status: "active",
      },
    });

    // eslint-disable-next-line camelcase
    if (!user) {
      res.status(400).send("Something went wrong!");
    }
    const accessToken = jwt.sign(
      { email: user.email, role: user.role },
      "access",
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { email: user.email, role: user.role },
      "refresh",
      { expiresIn: "1d" }
    );
    res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/refresh-token", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    res.status(403);
  }
  jwt.verify(refreshToken, "refresh", (err, user) => {
    if (!err) {
      const accessToken = jwt.sign(
        { email: user.email, role: user.role },
        "access",
        { expiresIn: "24h" }
      );
      res.status(201).json({ accessToken });
    } else {
      res.status(403);
    }
  });
});

// Get all Users
router.get("/users-list", auth, isAuthorized("admin"), (req, res) => {
  DB.User.findAll()
    .then((users) => {
      res.send({
        users,
      });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

// Add new user
// eslint-disable-next-line consistent-return
router.post("/create-user", async (req, res) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }
  // eslint-disable-next-line camelcase
  const { first_name, last_name, email, role, password, status } = req.body;
  const findUser = await DB.User.findOne({ where: { email } });
  if (findUser) {
    res.status(400).send({ error: "user already exist!" });
  }
  DB.User.create({ first_name, last_name, email, role, password, status })
    .then((user) => {
      res.status(201).send({
        user,
      });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

// uodate user info
// eslint-disable-next-line consistent-return
router.put("/:id", async (req, res) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().optional(),
    email: Joi.string().email().required(),
    status: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }
  const findUser = await DB.User.findOne({ where: { id: req.params.id } });
  if (!findUser) {
    res.status(400).send({ error: "user does'nt exist!" });
  }
  DB.User.create(req.body)
    .then((user) => {
      res.send({
        user,
      });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

// delete user
// eslint-disable-next-line consistent-return
router.delete("/:id", auth, isAuthorized("admin"), async (req, res) => {
  const findUser = await DB.User.findOne({ where: { id: req.params.id } });
  if (!findUser) {
    res.status(400).send({ error: "user does'nt exist!" });
  }
  DB.User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send({ msg: "User successfully deleted!" });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

module.exports = router;
