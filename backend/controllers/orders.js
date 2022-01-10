const orderModel = require("../database/models/ordersSchema");

const createNewOrder = (req, res) => {
  const { product_id, user_id, totalPrice } = req.body;

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
    .then((result)=>{

    res.status(200).json(result)

    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "server error",
          });
    })


};

module.exports = { 
    createNewOrder,
     getAllOrders 
    
    };
