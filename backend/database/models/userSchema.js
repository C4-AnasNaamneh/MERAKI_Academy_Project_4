const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    Age: {type:Number,required:true},
    Country: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true,unique:true},
    role: {type:String,required:true,default:"user"}

})

exports.module = mongoose.model("User",userSchema);
 