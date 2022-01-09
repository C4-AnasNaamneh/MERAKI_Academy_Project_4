const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const bcrypt = require("bcrypt");


app.use(cors());


 const usersRouter = require("./routes/users");
 //const loginRouter = require("./routes/login")

app.use(express.json());

 app.use("/",usersRouter);
 //app.use("/",loginRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
