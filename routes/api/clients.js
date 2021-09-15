const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");
const Joi = require("joi");
const db = require("../../config/database");
const Member = require("../../models/Client");

// Get all members
router.get("/", (req, res) => {
  Member.findAll()
    .then((members) => {
      res.send({
        members: members,
      });
    })
    .catch((err) => console.log(`Error: ${err}`));
});

// Get Single Member
router.get("/:id", (req, res) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json(error.details);
  }
  if (!req.params.id) return res.send("No ID specified");
  Member.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((members) => {
      if (members.length > 0) {
        res.status(200).send({ members: members });
      } else {
        res.status(400).send({ msg: "Member not found" });
      }
    })
    .catch((err) => console.log(err));
});

// Create Member
router.post("/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    contact_email: Joi.string().email().required(),
    status: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }
  let { name, contact_email, status } = req.body;

  Member.create({
    name,
    contact_email,
    status,
  })
    .then((member) => {
      res.send(member);
    })
    .catch((err) => console.log(err));
});

// Update existing member
router.put("/:id", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email(),
    status: Joi.any().allow("active", "inactive"),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }
  let { name, contact_email, status } = req.body;

  Member.update(
    {
      name,
      status,
      contact_email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((member) => {
      if (member) {
        res.send({ msg: "Member Updated Successfully" });
      }
    })
    .catch((err) => console.log(err));
});

// Delte existing member
router.delete("/:id", (req, res) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json(error.details);
  }
  Member.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send({ msg: "Member deleted" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
