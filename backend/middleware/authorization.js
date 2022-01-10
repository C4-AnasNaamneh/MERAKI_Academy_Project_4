


const authorization = (req, res, next) => {
    console.log(req.token.role);

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