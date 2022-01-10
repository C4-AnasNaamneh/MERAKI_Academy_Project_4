const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(404).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const token = req.headers.authorization.split(" ").pop();

  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (result) {
      req.token = result;
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "the token is invalid or expired",
      });
    }
  });
};



module.exports = { authentication };
