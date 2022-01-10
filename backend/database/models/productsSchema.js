const mongoose = require ("mongoose");

const productsSchema = new mongoose.Schema({

    title: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:String,required:true},
    img: {type:String} 

})

module.exports = mongoose.model("Products",productsSchema);

