const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    
    product_id: {type:mongoose.Types.ObjectId, ref:"Products"},
    user_id: {type:mongoose.Types.ObjectId, ref:"User"},
    totalPrice: {type:Number}

})

module.exports = mongoose.model("Orders",ordersSchema)