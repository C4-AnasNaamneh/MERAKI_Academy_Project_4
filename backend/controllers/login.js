const userModel = require("../database/models/userSchema");


const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: req.body.email.toLowerCase() })
    .then(async (result) => {

      await bcrypt.compare(password, result.password, (err, compare) => {
        const payload = {
          userId: result._id,
          country: result.country,
          role: result.role 
        };

        const options = {
          expiresIn: "60m",
        };

        const token = jwt.sign(payload, process.env.SECRET, options);

        if (compare == true) {
          res.status(200).json({
            success: true,
            message: "Valid login",
            token: token,
            role: result.role
          });
        } else {
          res.status(403).json({
            success: false,
            message: "The password you've entered is incorrect",
          });
        }
      });
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message: "The email doesn't exist",
      });
    });
};

module.exports = {
  login,
};
