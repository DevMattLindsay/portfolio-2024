import * as React from "react";
import ScrollInView from "./scrollInView";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-skills section-full">
      <div className="container row">
        <ScrollInView className="col-lg-5 -anim-fade-right">
          <h2 className="section-header">Skills</h2>
          <p>
            Building web applications is my passion. I love keeping up to date
            with the newest technologies and best practices. I'm always looking
            for ways to improve my skills and learn new things.
          </p>
          <p>
            My main area of expertise is using React to create interactive
            layouts for medium and large web apps. I build websites with
            scalability, accessibility and security in mind.
          </p>
          <p>
            I also have picked up some back end knowledge. My professional
            experience I have used PHP with code igniter and Node with NestJS
          </p>
        </ScrollInView>
        <div className="col-lg-7">
          <div className="skills-graph">
            <div className="skills-graph-labels">
              <div className="-label">
                <span>Front End</span>
              </div>
              <div className="-label">
                <span>React</span>
              </div>
              <div className="-label">
                <span>Back End</span>
              </div>
            </div>
            <div className="skills-graph-bars">
              <div className="skills-levels">
                <span>Beginner</span>
                <span>Experienced</span>
                <span>Mastered</span>
              </div>
              <ScrollInView className="-bar -frontend"></ScrollInView>
              <ScrollInView className="-bar -react"></ScrollInView>
              <ScrollInView className="-bar -backend"></ScrollInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
