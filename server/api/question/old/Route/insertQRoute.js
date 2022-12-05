const express = require ("express");
const newQuestion= require ("../controller/insertQController.js");

let insertRoute = express.Router();

insertRoute.post("/insert", newQuestion);

module.exports = insertRoute;
