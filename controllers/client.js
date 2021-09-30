const {
  successResponseHandler,
  errorResponseHandler,
} = require("../middlewares/response-handler");
const { Client } = require("../models");

const list = async (req, res, _next) => {
  try {
    let clients = [];
    clients = await Client.findAll();
    return successResponseHandler(req, res, clients);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const register = async (req, res, _next) => {
  try {
    let findClient = {};
    let client = {};
    const { email } = req.body;
    findClient = await Client.findOne({ where: { email } });
    if (findClient) throw new Error("Client already exists with same email!");
    client = await Client.create(req.body);
    return successResponseHandler(req, res, client);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const updateClient = async (req, res, _next) => {
  try {
    let findClient = {};
    let client = [];
    let existingClient = {};
    const clientId = req.params.id;
    findClient = await Client.findOne({ where: { id: clientId } });

    if (!findClient) throw new Error("Client not found!");
    existingClient = await Client.findOne({
      where: { email: req.body.email },
    });
    if (existingClient)
      throw new Error("Client already exists with same email!");
    client = await Client.update(req.body, {
      where: { id: clientId },
      returning: true,
    });
    const clientObj = client[1][0];
    return successResponseHandler(req, res, clientObj);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const deleteClient = async (req, res, _next) => {
  try {
    let findClient = {};
    findClient = await Client.findOne({ where: { id: req.params.id } });
    if (!findClient) throw new Error("Client not found!");
    await Client.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponseHandler(req, res, {
      message: "Client successfully deleted!",
    });
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 404);
  }
};

module.exports = { list, register, updateClient, deleteClient };
