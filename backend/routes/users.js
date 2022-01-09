const express = require("express");

const {createNewUser} = require("../controllers/users")

const usersRouter = express.Router();


usersRouter.post("/users",createNewUser)

module.exports = usersRouter