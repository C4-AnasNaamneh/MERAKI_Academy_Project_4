const userModel = require("../database/models/userSchema");

const createNewUser = (req, res) => {
  const { firstName, lastName, age, country, email, password, role } = req.body;

  const user = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
  })
  user
  .save()
  .then((result)=>{
res.status(200).json({
    success: true,
    message: "Success User Added",
})

  })
  .catch((err)=>{
 res.status(409).json({

    success:false,
    message: "The email already exists"
 })
  })


};

module.exports = {
  createNewUser,
};
