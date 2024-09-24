import React from "react";
import "./Footer.css";
import { MdCopyright } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import signature from "../../assets/signaturesmall.png";

const Footer = () => {
  return (
    <div id="footer">
      <div id="copyright">
        <h1>
          <MdCopyright />
          WATCH
        </h1>
      </div>
      <p>⚠⚠ Our movies are from a third-party</p>
      <h2>Follow us on social media:</h2>
      <div className="media">
        <ul>
          <li>
            <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/magicfingers1/">
              <CiInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCQTMMDXCT1-w3UGNjLRr9VQ">
              <CiYoutube />
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <CiMail />
            </a>
          </li>
        </ul>
      </div>

      <a href="https://bee45.netlify.app/">
        <img src={signature} alt="developer" />
      </a>
    </div>
  );
};

export default Footer;
