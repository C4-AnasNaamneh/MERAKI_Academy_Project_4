const productModel = require("../database/models/productsSchema");



const createNewProduct = (req, res) => {
  const { title, description, price, img } = req.body;

  const product = new productModel({
    title,
    description,
    price,
    img,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Product Added",
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Server Error",
      });
    });
};

const getAllProducts = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
      });
    });
};

const getProductsById = (req, res) => {
   // const getById = req.body._id;
    
    //works with findone and find by id

  const  getById =  req.params.id;


  productModel
    .findById({ _id: getById })

    .then((result) => {
      console.log(getById);
      //console.log(result);
      res.status(200).json({
        success: true,
        message: `Succeeded to get product with id: ${getById}`,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "server error",
      });
    });
};

const deleteProductById = (req, res) => {
  const deleteById = req.params.id;

  productModel
    .findByIdAndDelete({ _id: deleteById })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Succeeded to delete product with id: ${deleteById}`,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: `Failed to delete product with id: ${deleteById}`,
      });
    });
};

const updateProductById = (req, res) => {
  const updateById = req.params.id;

  productModel
    .findByIdAndUpdate(
      { _id: updateById },
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
      }
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Succeeded to update product with id: ${updateById}`,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: `Failed to update product with id: ${updateById}`,
      });
    });
};

module.exports = {
  createNewProduct,
  getAllProducts,
  getProductsById,
  deleteProductById,
  updateProductById,
};
