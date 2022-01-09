const mongoose = require ("mongoose");

const productsSchema = new mongoose.Schema({

    title: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    img: {type:String} 

})

exports.module = mongoose.model("Products",productsSchema);

