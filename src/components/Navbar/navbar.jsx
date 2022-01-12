import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div class="nav">
      <a href="/" class="logo">
        <img src="./logo.png"></img>
      </a>
      <div class="headers">
        <a href="#" className="aboutUs">
          About us
        </a>
        <a href="#" className="ourServices">
          Our Services
        </a>
        <a href="#" class="contactUs">
          Contact Us
        </a>
      </div>
    </div>
  );
}
