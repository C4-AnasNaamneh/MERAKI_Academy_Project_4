const orderModel = require("../database/models/ordersSchema");

const createNewOrder = (req, res) => {
  //const product_id = req.params.id;
  const { totalPrice, product_id } = req.body;
  // const product_idsoso = req.body

  const user_id = req.token.userId;

  const order = new orderModel({
    product_id,
    user_id,
    totalPrice,
  });

  order
    .save()

    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getAllOrders = (req, res) => {
  orderModel
    .find({})
    .populate("product_id")
    .populate("user_id")

    .then((result) => {
      res.status(200).json(result);
      console.log();
      //totalPrice = [result.data.product_id]
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
      });
    });
};

module.exports = {
  createNewOrder,
  getAllOrders,
};
