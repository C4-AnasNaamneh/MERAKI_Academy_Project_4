const express = require("express");

const { createSearch } = require("../controllers/search");

const searchRouter = express.Router();


searchRouter.post("/search",createSearch);


module.exports = searchRouter;
