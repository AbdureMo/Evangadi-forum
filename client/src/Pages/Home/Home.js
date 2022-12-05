import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "./bootstrap.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Question from "../../Components/Question/Question";

function Home() {
const [userData, setUserData] = useContext(UserContext);
const [allQuestions, setAllQuestions] = useState([]);
const navigate = useNavigate();
const Questions = async () => {
  try {
    const questionRes = await axios.get("http://localhost:4000/api/question");
    setAllQuestions(questionRes.data.data);
  } catch (err) {
    console.log("problem", err);
  }
};
useEffect(() => {
  if (!userData.user) navigate("/login");
  Questions();
}, [userData.user, navigate]);
const handleClick = (e) => {
  e.preventDefault();
  navigate("/ask-question");
};

  return (
    <div className=" home">
      <div className="home__welcome">
        <div>
          <button className="home__button" onClick={handleClick}>
            Ask Question
          </button>
        </div>
        <div className="welcome">
          {/* show username in homepage */}

          <h4>WelCome {userData.user?.display_name}</h4>
        </div>
      </div>

      <div className="form_question">
        <h4>Questions</h4>
      </div>
      <div>
        {allQuestions.map((question) => (
          <div key={question.post_id}>
            <hr />
            <Link
              to={`questions/${question.post_id}`}
              className="text-decoration-none text-reset"
            >
              <Question
                question={question.question}
                userName={question.user_name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;





//  <div className="user_answer">
//    <div className="user_info">
//      <div className="icon_name">
//        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY430C26CjaOASw2QXMy15oVjaUWmvlYpdqQ&amp;usqp=CAU" /> */}
//        {/* <p>username</p> */}
//      </div>
//      <div className="Question">{/* <p>Question</p> */}</div>
//    </div>

//    {/* <div className="home_arrow">
//                 <img src="https://ik.imagekit.io/AmazonImg12/Amazon_Images/1668108358326_9WzNAXr0w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668108770662" />
//             </div> */}

//    <table className="table_body">
//      <tbody>
//        {query.map((data, i) => {
//          let display = (
//            <tr>
//              <td>
//                <AccountCircleIcon />
//                <p>{userData.user?.display_name}</p>
//              </td>
//              <td>{data.question}</td>
//              <td>
//                <ChevronRightIcon />
//              </td>
//            </tr>
//          );
//          return display;
//        })}
//      </tbody>
//    </table>
//  </div>;
