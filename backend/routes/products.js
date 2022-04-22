const express = require("express");

const {
  createNewProduct,
  getAllProducts,
  getProductsById,
  deleteProductById,
  updateProductById,
} = require("../controllers/products");

const { authentication } = require("../middleware/authentication");

const { authorization } = require("../middleware/authorization");

const productsRouter = express.Router();

productsRouter.post(
  "/products",
  authentication,
  authorization,
  createNewProduct
);

productsRouter.get("/products", authentication, getAllProducts);
productsRouter.get("/products/:id", authentication, getProductsById);


productsRouter.delete("/products/:id", deleteProductById);
productsRouter.put("/products/:id", updateProductById);


module.exports = productsRouter;
