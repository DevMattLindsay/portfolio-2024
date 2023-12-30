import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Header: React.FC = () => {
  return (
    <header id="home" className="section-home section-full">
      <div className="container">
        <h1 className="home-header">
          Hi, <br />
          I'm Matthew, <br />
          Software Engineer
        </h1>

        <p className="home-subheader">
          <span className="-carot">&lt;</span> Web applications and Front End{" "}
          <span className="-carot">&gt;</span>
        </p>

        <a href="#contact" className="btn btn-swipe js-scroll-link">
          <span className="bg"></span>
          <span className="text">Contact me!</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
