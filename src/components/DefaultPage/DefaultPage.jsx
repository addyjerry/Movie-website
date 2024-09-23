import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "./DefaultPage.css";
import logo from "../../assets/watch.png";

const DefaultPage = () => {


  return (
    <div id="Default">
      <div className="logo__area">
        <h1>WATCH</h1>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>1</li>
          </Link>
          <Link to="/two">
            <li>2</li>
          </Link>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>
     
      
    </div>
  );
};

export default DefaultPage;
