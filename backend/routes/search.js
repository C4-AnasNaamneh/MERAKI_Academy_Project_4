const express = require("express");

const { getSearchByTitle } = require("../controllers/search");

const searchRouter = express.Router();


searchRouter.post("/search",getSearchByTitle);


module.exports = searchRouter;
