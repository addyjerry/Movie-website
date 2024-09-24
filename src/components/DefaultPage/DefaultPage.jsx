import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DefaultPage.css";
import logo from "../../assets/watch.png";


const DefaultPage = () => {
  return (
    <div id="Default">
      <Link to="/">
        {" "}
        <div className="logo__area">
          <h1>WATCH</h1>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>1</li>
          </Link>
          <Link to="/two">
            <li>2</li>
          </Link>
          <Link to="/three">
            <li>3</li>
            </Link>
            <Link to='/four'>
          <li>4</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default DefaultPage;
