const express = require("express");

const router = express.Router();
const schemas = require("../middlewares/validation/schema");
const validation = require("../middlewares/validation");

const clientController = require("../controllers").client;

/* Client Routes */
router.get("/api/client", clientController.list);
router.post(
  "/api/client",
  validation(schemas.createClient, "body"),
  clientController.register
);
router.put("/api/client/:id", clientController.updateClient);
router.delete("/api/client/:id", clientController.deleteClient);

module.exports = router;
