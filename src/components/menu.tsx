import React, { useState } from "react";
import { FaFileArrowDown, FaLinkedin } from "react-icons/fa6";

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
          <a href="#contact" className="sidebar-nav-link js-scroll-link">
            Contact
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a
            download
            href="/documents/matthewlindsay.pdf"
            className="btn btn-iconed sidebar-resume"
          >
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
        </div>
      </aside>
    </>
  );
};

export default Menu;
