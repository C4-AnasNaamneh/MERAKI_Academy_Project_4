const express = require("express");

const {
  createNewProduct,
  getAllProducts,
  deleteProductById,
  updateProductById,
} = require("../controllers/products");

const productsRouter = express.Router();

productsRouter.post("/products", createNewProduct);
productsRouter.get("/products", getAllProducts);
productsRouter.delete("/products/:id", deleteProductById);
productsRouter.put("/products/:id", updateProductById);

module.exports = productsRouter;
