import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

import Github from "@iconscout/react-unicons/icons/uil-github"; // Corrected the typo in the icon name

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>jhalok305@gmail.com</span>
        <div className="f-icons">
          {/* Adding links to the social media profiles */}
          <a href="https://www.instagram.com/aloktechnology" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/ak28" target="_blank" rel="noopener noreferrer">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/alokjha1999" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
