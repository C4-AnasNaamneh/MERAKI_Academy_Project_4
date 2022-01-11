const express = require("express");

const {
  createNewProduct,
  getAllProducts,
  deleteProductById,
  updateProductById,
} = require("../controllers/products");

const { authentication } = require("../middleware/authentication");

const {authorization} = require("../middleware/authorization")



const productsRouter = express.Router();


productsRouter.post("/products",authentication,authorization,createNewProduct)

productsRouter.get("/products", getAllProducts);
productsRouter.delete("/products/:id", deleteProductById);
productsRouter.put("/products/:id", updateProductById);


module.exports = productsRouter;
