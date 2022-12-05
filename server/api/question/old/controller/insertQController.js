// const myConnections = require("../../../config/database");

// let newQuestion = (req, res) => {
//   const { question, question_description } = req.body;
//   let sqlAddToProducts = `INSERT INTO Questions (question,question_description) VALUES ('${question}','${question_description}')`;

//   myConnections.query(sqlAddToProducts, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

//   res.end("new qestion added");
// };

// module.exports = newQuestion;
