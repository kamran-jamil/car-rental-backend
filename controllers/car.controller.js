const { successResponse, errorResponse } = require("../helpers/responseHelper");

const { Car, CarType, CarMeta } = require("../models");

const carList = async (req, res, _next) => {
  try {
    let cars = [];
    cars = await Car.findAll({
      include: [{ model: CarType }, { model: CarMeta }],
    });
    return successResponse(req, res, cars);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

const createCar = async (req, res, _next) => {
  try {
    let car = {};
    const { owner_uuid, car_type_uuid, description, status, rate, discount } =
      req.body;
    const payload = {
      owner_uuid,
      car_type_uuid,
      description,
      status,
      rate,
      discount,
    };
    car = await Car.create(payload);
    return successResponse(req, res, car);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

const updateCar = async (req, res, _next) => {
  try {
    let findCar = {};
    let car = [];
    const uuid = req.params.id;
    findCar = await Car.findOne({ where: { uuid } });
    console.log("findCar", findCar);
    if (!findCar) throw new Error("Car not found!");
    car = await Car.update(req.body, {
      where: { uuid },
      returning: true,
    });
    const carObj = car[1][0];
    return successResponse(req, res, carObj);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

const deleteCar = async (req, res, _next) => {
  try {
    let findCar = {};
    findCar = await Car.findOne({ where: { uuid: req.params.id } });
    if (!findCar) throw new Error("Car not found!");
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, {
      message: "Car successfully deleted!",
    });
  } catch (err) {
    return errorResponse(req, res, err.message, 404);
  }
};

const carTypelist = async (req, res, _next) => {
  try {
    let types = [];
    types = await CarType.findAll({ order: [["uuid", "ASC"]] });
    return successResponse(req, res, types);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

// cartype
const createCarType = async (req, res, _next) => {
  try {
    let type = {};
    type = await CarType.create(req.body);
    return successResponse(req, res, type);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

const updateCarType = async (req, res, _next) => {
  try {
    let findType = {};
    let type = [];
    const typeId = req.params.id;
    findType = await CarType.findOne({ where: { uuid: typeId } });

    if (!findType) throw new Error("Type not found!");

    type = await CarType.update(req.body, {
      where: { uuid: typeId },
      returning: true,
    });
    const typeObj = type[1][0];
    return successResponse(req, res, typeObj);
  } catch (err) {
    return errorResponse(req, res, err.message, 400);
  }
};

const deleteCarType = async (req, res, _next) => {
  try {
    let findType = {};
    findType = await CarType.findOne({ where: { uuid: req.params.id } });
    if (!findType) throw new Error("Type not found!");
    await CarType.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, {
      message: "Car type successfully deleted!",
    });
  } catch (err) {
    return errorResponse(req, res, err.message, 404);
  }
};

module.exports = {
  carList,
  createCar,
  updateCar,
  deleteCar,
  carTypelist,
  createCarType,
  updateCarType,
  deleteCarType,
};
