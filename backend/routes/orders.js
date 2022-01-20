const express = require("express");

const { createNewOrder, getAllOrders } = require("../controllers/orders");
const { authentication } = require("../middleware/authentication");

const ordersRouter = express.Router();

ordersRouter.post("/orders/",authentication, createNewOrder);

ordersRouter.get("/orders",authentication, getAllOrders);

module.exports = ordersRouter;
