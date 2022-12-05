import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Header({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  };

  const [toggleMenu, setToggleMenu] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="header">
      <nav className=" nav shadow">
        <div class="contents_wrapper">
          <div class="logo">
            <Link to="/">
              <img
                alt=""
                src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              />
            </Link>
          </div>
          {(toggleMenu || screenWidth > 768) && (
            <ul class="links_wrapper">
              <li className="items">Home</li>
              <li className="items">How it works</li>
              <li className="button items">
                <button className="button items" onClick={goToSignIn}>
                  {userData.user ? "LogOut" : "SIGN IN"}
                </button>
              </li>
            </ul>
          )}

          <div onClick={toggleNav} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
