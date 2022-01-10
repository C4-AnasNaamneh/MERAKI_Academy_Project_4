const express = require("express");

const {createNewOrder,getAllOrders} = require("../controllers/orders")


const ordersRouter = express.Router();



ordersRouter.post("/orders",createNewOrder)

ordersRouter.get("/orders",getAllOrders)





module.exports = ordersRouter




