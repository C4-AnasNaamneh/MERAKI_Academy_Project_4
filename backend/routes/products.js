const express = require("express");

const {
  createNewProduct,
  getAllProducts,
  deleteProductById,
} = require("../controllers/products");

const productsRouter = express.Router();

productsRouter.post("/products", createNewProduct);
productsRouter.get("/products", getAllProducts);
productsRouter.delete("/products/:id", deleteProductById);

module.exports = productsRouter;
