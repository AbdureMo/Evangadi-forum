// const pool = require("../../config/database");
// // import question from "./question.service"
// const question = require ("./question.service")


// module.exports = {
//   createQuestion: (req, res) => {
//     const { question, question_description } = req.body;
//         //validation
//     if (question.length<1 || questions.length>250 )
//       return res
//         .status(400) 
//         .json({ msg: "Wrong character length!" });
 
  
// pool.query(question, function (err,result){
//     if(err) throw err;
//     console.log('1 question recorded')
// }) 
//  },
  
// }



const { v4: uuidv4 } = require("uuid");
const {
  questionById,
  getAllQuestions,
  addQuestion,
} = require("./question.service");

module.exports = {
  createQuestion: (req, res) => {
    //id is user id
    const { question, id } = req.body;
    req.body.postId = uuidv4();

    //validation
    if (!question || !id) {
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });
    }

    //sending data to question table
    addQuestion(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({
        msg: "New question was created successfully",
        data: results,
      });
    });
  },
  getQuestions: (req, res) => {
    getAllQuestions((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection error" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getQuestionById: (req, res) => {
    //id is postId
    let id = req.params.id;
    questionById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection error" });
      }
      if (!results) {
        return res.status(400).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
};