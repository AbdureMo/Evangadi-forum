const express = require("express");
const allQuestions = require ("../controller/getQController.js");

let everyQuestion = express.Router();

everyQuestion.get("/getquestions", allQuestions);

module.exports = everyQuestion;
