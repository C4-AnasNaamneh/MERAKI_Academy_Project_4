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
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
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


const   deleteProductById = (req,res)=>{

    const deleteById = req.params.id

    productModel
    .findByIdAndDelete({_id:deleteById})
    .then((result)=>{
    res.status(200).json({
        success: true,
        message: `Succeeded to delete product with id: ${deleteById}`
    })
    }).catch((err)=>{

        res.status(404).json({
            success:false,
            message: `Failed to delete product with id: ${deleteById}`
        })
    })

}




module.exports = {
  createNewProduct,
  getAllProducts,
  deleteProductById
};
