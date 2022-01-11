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
        <a href="#" class="aboutUs">
          About us
        </a>
        <a href="#" class="aboutUs">
          About us
        </a>
        <a href="#" class="Contact Us">
          Contact Us
        </a>
      </div>
    </div>
  );
}
