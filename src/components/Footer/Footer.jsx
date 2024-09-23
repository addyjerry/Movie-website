import React from "react";
import "./Footer.css";
import { MdCopyright } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div id="footer">
      <div id="copyright">
        <h1>
          <MdCopyright />
          WATCH
        </h1>
      </div>
      <h2>Follow us on social media:</h2>
      <div className="media">
        <ul>
          <li>
            <BsTwitterX />
          </li>
          <li>
            <CiInstagram />
          </li>
          <li>
            <CiYoutube />
          </li>
          <li>
            <CiMail />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
