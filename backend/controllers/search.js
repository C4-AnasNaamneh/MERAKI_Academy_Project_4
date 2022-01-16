const productModel = require("../database/models/productsSchema")

const getSearchByTitle = (req,res)=>{

const title = req.body.title;

productModel
.find({title:title})
.then((result)=>{
    res.status(200).json(result)
}) .catch((err)=>{
    res.status(404).json(err)
})
}


module.exports = {getSearchByTitle}