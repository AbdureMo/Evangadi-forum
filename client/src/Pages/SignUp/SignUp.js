import React, { useContext, useState } from "react";
import "./SignUp.css";
// import "../Login/Login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Visibility from "@mui/icons-material/Visibility";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

function SignUp() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

      const [passwordShown, setPasswordShown] = useState(false);

      // Password toggle handler
      const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
      // Password toggle handler
      const togglePasswordOff = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(passwordShown);
      };
    
    //importing global state from context
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //sending data to be registered in database
            await axios.post('http://localhost:4000/api/users', form);

            //once registered the login automatically so send the new user info to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            // set the global state with the new user info
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate to homepage once the user is signed up
            navigate("/");
        } catch (error) {
            console.log('problem ==>', error.response.data.msg);
        }
    }
  return (
    <div className="sign_up">
      <div className="section_wrapper ">
        <div className="left shadow">
          <div>
            <div>
              <p>
                <strong>Join the network</strong>
              </p>
            </div>
            <div>
              <p className="par_two">
                Already have an account?<span> </span>
                <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
              />
              <br />
              <div className="flex_input">
                <input
                  className="input input1"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <br />

                <input
                  className="input input2"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <input
                className="input"
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
              />
              <br />

              <input
                className=" input mainpage__input"
                type={passwordShown ? "text" : "password"}
                // type={passwordType}
                // onChange={handlePasswordChange}
                // value={passwordInput}
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
              />
              <i className="visibilityEye ">
                <VisibilityOffIcon onClick={togglePassword} />
              </i>
              <br />

              <button className="agree_btn">Agree and Join</button>
            </form>
          </div>
          <div>
            <p className="par_two">
              I agree to the <Link to="#">privacy policy</Link> and
              <Link to="#"> terms of service.</Link>
            </p>
            <p className="last_par par_two">
              <Link to="/login">Already have an account?</Link>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="about par_two">About</p>
          <h2>Evangadi Networks Q&A</h2>
          <p className=" right_par par_two">
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
          </p>
          <p className=" right_par par_two">
            Wheather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
          <Link to="#" className="how_button">
            HOW IT WORKS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
