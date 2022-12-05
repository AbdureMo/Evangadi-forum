import React, { useState, useContext, useEffect } from "react";
import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";

function LogutHeader({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);
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
      {/* <Navbar className='nav_wrapper' bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
              <img
            alt=''
            src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png'
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">How it works</Nav.Link>
            <Button variant="primary">SIGN IN</Button>
          </Nav>
        </Container>
      </Navbar> */}

      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='nav_wrapper'>
        <Navbar.Brand href="#home">
            <img
            alt=''
            src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png'
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/info">How it works</Nav.Link>
            <Button variant="primary">SIGN IN</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

      <nav className=" nav shadow">
        <div class="contents_wrapper">
          <div class="logo">
            <img
              alt=""
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
            />
          </div>
          {(toggleMenu || screenWidth > 768) && (
            <ul class="links_wrapper">
              <li className="items">Home</li>
              <li className="items">How it works</li>
              <li className="button items" onClick={logout}>LogOut</li>
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

export default LogutHeader;
