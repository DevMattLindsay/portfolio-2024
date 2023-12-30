import * as React from "react";
import ScrollInView from "./scrollInView";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-skills section-full">
      <div className="container row">
        <ScrollInView className="col-lg-5 -anim-fade-right">
          <h2 className="section-header">Skills</h2>
          <p>
            Since beginning my career as a Front End developer 5 years ago, I’ve
            picked up a number of skills building websites that are fast and
            easy to use.
          </p>
          <p>
            My main area of expertise is using HTML, CSS and JS to create
            interactive layouts for medium and large web apps. I build websites
            with scalability, accessibility and security in mind.
          </p>
          <p>
            I also have picked up some back end knowledge. My professional
            experience I have used PHP with code igniter but I wish to branch
            out and learn newer back end technologies, namely NodeJS which I
            started learning.
          </p>
        </ScrollInView>
        <div className="col-lg-7">
          <div className="skills-graph">
            <div className="skills-graph-labels">
              <div className="-label">
                <span>Front End</span>
              </div>
              <div className="-label">
                <span>Back End</span>
              </div>
              <div className="-label">
                <span>React</span>
              </div>
            </div>
            <div className="skills-graph-bars">
              <div className="skills-levels">
                <span>Beginner</span>
                <span>Experienced</span>
                <span>Mastered</span>
              </div>
              <ScrollInView className="-bar -frontend"></ScrollInView>
              <ScrollInView className="-bar -backend"></ScrollInView>
              <ScrollInView className="-bar -react"></ScrollInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
