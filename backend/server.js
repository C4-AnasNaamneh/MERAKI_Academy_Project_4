const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken")



app.use(cors());


 const usersRouter = require("./routes/users");
 const loginRouter = require("./routes/login");
const productsRouter = require("./routes/products")

app.use(express.json());

 app.use("/",usersRouter);
 app.use("/",loginRouter);
app.use("/",productsRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
