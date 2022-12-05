import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="images">
        <img
          className="footer_logo"
          src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
          alt=""
          width="100px"
        />

        <div className="footer_icons">
          <div className="foot_icon">
            <FaFacebookF />
          </div>
          <div className="foot_icon">
            <FaInstagram />
          </div>
          <div className="foot_icon">
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="first_div">
        <h3 className="footer_dicript">Useful Link</h3>
        <div className="footer_links">
          <a to="/howitworks">How it Works</a>
        </div>
        <div className="footer_links">
          <a to="/terms">terms of service.</a>
        </div>
        <div className="footer_links">
          <a to="/privacy">privacy policy</a>
        </div>
      </div>
      <div className="second_div">
        <h3 className="footer_dicript">Contact Info</h3>
        <div className="footer_links">Evangadi Networks</div>
        <div className="footer_links">support@evangadi.com</div>
        <p className="footer_links">+1-202-306-2702</p>
      </div>
    </div>
  );
}

export default Footer;
