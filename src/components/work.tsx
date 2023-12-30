import * as React from "react";
import ScrollInView from "./scrollInView";
import gamImg from "../assets/images/work-gam.png";
import walmartImg from "../assets/images/work-walmart.png";
import kulapixImg from "../assets/images/work-kulapix.png";

const Work: React.FC = () => {
  return (
    <section id="work" className="section-work section-full">
      <ScrollInView className="container row work-row -anim-fade-up">
        <h2 className="section-header">Work</h2>
        <div className="col-lg-8 work-experience">
          <h3 className="experience-title">GAM Creative Marketing</h3>
          <p className="experience-subtitle">
            Front End Developer, 2016 -&gt; 2021
          </p>
          <p className="experience-description">
            Developed web applications for a multitude of clients including
            Wal-Mart Canada. Worked in a small team with diverse skill sets to
            develop web apps.
          </p>
          <p className="experience-description">Tasks included :</p>
          <ul>
            <li>
              Developing new websites and features for our photo product
              platform
            </li>
            <li>
              Performing code reviews adherring to PCI security principles
            </li>
            <li>Assured AODA compliancy across projects</li>
          </ul>
          <p className="experience-description">
            Built company website created in a short time frame working closely
            to a designer to showcase our projects.
          </p>
        </div>
        <a
          href="https://gamcreative.com/"
          className="col-lg-4 work-block"
          target="_blank"
        >
          <img
            className="work-block-image"
            src={gamImg}
            alt="GAM Creative Company Website"
          />
          <div className="work-block-overlay">
            <span>visit</span>
          </div>
        </a>
      </ScrollInView>

      <ScrollInView className="container row work-row work-project -anim-fade-up">
        <div className="col-lg-8 work-experience">
          <h4 className="experience-title-project">Walmart Photo Centre</h4>
          <p className="experience-description">
            A large scope web application that allows users to upload, edit,
            preview and order photo products. Worked on this project for 5 years
            and understood it’s inner workings completely. Developed much of the
            Front End, including user interfaces, product builders, Dynamic
            pages with the CMS and product previews.
          </p>
          <p className="experience-description">
            Perfected the website for users across devices and browsers. Created
            advanced product builders using the PixiJS rendering engine and 3
            dimensional product previews with ThreeJS. Overhauled Stylesheet
            system to a modular SCSS setup.
          </p>
          <p className="experience-description">
            Dynamically built MP4 videos on the backend using FFmpeg for newer
            products that use video. Properly managed memory so as to not
            overwhelm the system.
          </p>
          <p className="experience-description">
            Learned how to write code that is accessible and secure for
            compliancy with AODA and PCI.
          </p>
        </div>
        <a
          href="https://www.walmartphotocentre.ca/"
          className="col-lg-4 work-block"
          target="_blank"
        >
          <img
            className="work-block-image"
            src={walmartImg}
            alt="GAM Creative Company Website"
          />
          <div className="work-block-overlay">
            <span>visit</span>
          </div>
        </a>
      </ScrollInView>

      <ScrollInView className="container row work-row work-project -anim-fade-up">
        <div className="col-lg-8 work-experience">
          <h4 className="experience-title-project">Kulapix</h4>
          <p className="experience-description">
            Photo Product website similar to Walmart Photo Centre but made for
            the US Market. Both websites share a backend however the front end
            was overhauled. Learned to create modular code to avoid repetition
            between projects.
          </p>
        </div>
        <a
          href="https://kulapix.com/"
          className="col-lg-4 work-block"
          target="_blank"
        >
          <img
            className="work-block-image"
            src={kulapixImg}
            alt="GAM Creative Company Website"
          />
          <div className="work-block-overlay">
            <span>visit</span>
          </div>
        </a>
      </ScrollInView>
    </section>
  );
};

export default Work;
