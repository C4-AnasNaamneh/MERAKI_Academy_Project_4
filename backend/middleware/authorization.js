


const authorization = (req, res, next) => {

    if (req.token.role == "admin") {
     next();
    } else {
        res.json({
        success: false,
        message:"Unauthorized"
  
        })
    }
  };

  module.exports = {authorization}