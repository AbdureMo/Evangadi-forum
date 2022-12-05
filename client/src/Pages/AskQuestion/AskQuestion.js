import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AskQuestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../context/UserContext.js";
import axios from "axios";

function AskQuestion() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/question", {
        id: userData.user.id,
        question: form.question,
        questionDescription: form.questionDescription,
      });
      navigate("/");
    } catch (err) {
      console.log("problem", err);
    }
  };

  return (
    <div className="askQuestion">
      <div className="steps">
        <h2>Steps to write a good question</h2>
      </div>
      <div className="ulContainer">
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className="formContainer shadow">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Ask a public question</h3>
            <Link
              to="/"
              className="text-decoration-none text-reset cursor-pointer"
            >
              Go to Question page
            </Link>
          </div>
          <div>
            <div>
              <textarea
                name="question"
                className="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                name="question_discription"
                className="description"
                type="text"
                placeholder="Question Description..."
                onChange={handleChange}
              />
            </div>
            <button type="">Post Your Question</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
