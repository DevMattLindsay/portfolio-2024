import React, { useState } from "react";
import { FaFileArrowDown, FaLinkedin, FaGithub } from "react-icons/fa6";
import resume from "../assets/documents/matthewlindsay.pdf";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? "-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="sidebar-toggle-icon">
          <div className="sidebar-toggle-icon-inner"></div>
        </div>
      </button>

      <aside className={`sidebar ${isOpen ? "-active" : ""}`}>
        <div className="sidebar-logo">
          <div className="sidebar-logo-name">
            Matthew <br />
            Lindsay
          </div>
          <div className="sidebar-logo-subtitle">Web App Dev</div>
        </div>

        <nav className="sidebar-nav">
          <a href="#skills" className="sidebar-nav-link js-scroll-link">
            Skills
          </a>
          <a href="#work" className="sidebar-nav-link js-scroll-link">
            Work
          </a>
          <a href="#projects" className="sidebar-nav-link js-scroll-link">
            Projects
          </a>
          <a href="#contact" className="sidebar-nav-link js-scroll-link">
            Contact
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a download href={resume} className="btn btn-iconed sidebar-resume">
            <div className="btn-iconed-text">Resume</div>
            <div className="btn-iconed-icon">
              <FaFileArrowDown />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-lindsay-135a47b6/"
            className="btn btn-iconed -iconed-blue sidebar-connect"
            target="_blank"
          >
            <div className="btn-iconed-text">Connect</div>
            <div className="btn-iconed-icon">
              <FaLinkedin />
            </div>
          </a>
          <a
            href="https://github.com/DevMattLindsay"
            className="btn btn-iconed -iconed-teal sidebar-github"
            target="_blank"
          >
            <div className="btn-iconed-text">Github</div>
            <div className="btn-iconed-icon">
              <FaGithub />
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Menu;
