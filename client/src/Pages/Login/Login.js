import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Visibility from "@mui/icons-material/Visibility";
// to import icons 
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log("problem", err);
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  const [type, setType] = useState("password");

  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listenforPassworder function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="section-wrapper">
      <div className="left_wrapper">
        <div className="leftSide">
          <div className="leftSide__login">Login to your account</div>
          <div className="leftSide__account">
            Don't have an account?
            <Link to="/signup" style={{ color: "#FFB882" }}>
              Create a new account
            </Link>
          </div>
          <div className="leftSide__form">
            <form onSubmit={handleSubmit}>
              <input
                className="mainpage__input"
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={handleChange}
              />
              <br /> <br />
              <input
                className="mainpage__input"
                name="password"
                placeholder="Your Password"
                type={type}
                onChange={handleChange}
              />
              <span onClick={HandleIconChange} className="showHide2">
                <Icon icon={icon} size={20} />
              </span>
              <br /> <br />
              <div className="submit btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="createAccount">
            <Link to="/signup">Create a new account</Link>
          </div>
        </div>
      </div>
      <div className="rightside">
        <div className="rightSide-container">
          <div className="about">About</div>
          <div className="rightside__question">
            <h2>Evangadi Networks Q&A </h2>
            <br />
            <br />
          </div>
          <div className="rightside__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              magni ipsum mollitia quas, expedita maiores amet deserunt, cumque
              incidunt dolorem porro omnis facere molestiae eaque natus ducimus
              totam id iste.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              magni ipsum mollitia quas, expedita maiores amet deserunt, cumque
              incidunt dolorem porro omnis facere molestiae eaque natus ducimus
              totam id iste.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              magni ipsum mollitia quas, expedita maiores amet deserunt, cumque
              incidunt dolorem porro omnis facere molestiae eaque natus ducimus
              totam id iste.
            </p>
            <br />
          </div>
          <div className="howItWork btn">
            <button>HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

