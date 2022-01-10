const productModel = require("../database/models/productsSchema");

const createNewProduct = (req, res) => {
  const { title, description, price, img } = req.body;

  const product = new productModel({
    title,
    description,
    price,
    img,
  });
  product.save().then((result) => {
    res.status(201).json(result);
  });
};

module.exports = {
  createNewProduct,
};
