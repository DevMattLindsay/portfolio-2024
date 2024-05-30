import * as React from "react";
import ScrollInView from "./scrollInView";
import gamImg from "../assets/images/work-gam.png";
import walmartImg from "../assets/images/work-walmart.png";
import pivotcaImg from "../assets/images/work-pivotca.png";
import pivotioImg from "../assets/images/work-pivotio.png";
import ExperienceItem from "./experienceItem";

const Work: React.FC = () => {
  return (
    <section id="work" className="section-work section-full">
      <div>
        <ScrollInView className="container -anim-fade-up">
          <h2 className="section-header">Work</h2>
        </ScrollInView>

        <ExperienceItem
          title="pivotnow"
          subtitle="Front End Developer, 2022 -&gt; current"
          imgUrl={pivotcaImg}
          href="https://pivotnow.ca/"
        >
          <p className="experience-description">
            Developed web applications for a multitude of clients including
            Wal-Mart Canada. Worked in a small team with diverse skill sets to
            develop web apps.
          </p>
          <p className="experience-description">Responsibilities included :</p>
          <ul>
            <li>
              Worked with Designer to create "Design to Development" workflow.
              Used technologies such as Figma, Storybook and Jira, as well as
              their integration API's to streamline the process.
            </li>
            <li>
              Set up headless CMS for documentation writers to write and publish
              content for the company website. Used Strapi for the CMS and
              Gatsby for the static website. Used GraphQL to query CMS data and
              implemented a webhook to trigger a build when content is
              published.
            </li>
          </ul>
          <p className="experience-description"></p>
        </ExperienceItem>

        <ExperienceItem
          isProject={true}
          title="pivotnow"
          imgUrl={pivotioImg}
          href="https://pivotnow.io/"
        >
          <p className="experience-description">
            pivotnow is a web app that monitors devices and their status.
            Messaging a technician when an alert is triggered
          </p>
          <ul>
            <li>
              Built a component library that used tailwind, headlessUI and
              storybook. Worked with QA, designers and developers to make
              reusable components that matched design and were accessible and
              reusable.
            </li>
            <li>
              Built an Editable table component that used AWS Appsync to fetch
              live data, in so that multiple users can work on the same table
              and view changes live. Used Optimistic UI methodology for instant
              feedback for the user. Implemented virtualization to handle large
              datasets (1000+ records) in the table without significant
              performance loss.
            </li>
            <li>
              Managed state with Redux Saga, and later migrated to Redux Toolkit
              and RTK Query.
            </li>
          </ul>
        </ExperienceItem>

        <ExperienceItem
          title="GAM Creative Marketing"
          subtitle="Front End Developer, 2016 -&gt; 2021"
          imgUrl={gamImg}
          href="https://gamcreative.com/"
        >
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
            Built company portfolio website
          </p>
        </ExperienceItem>

        <ExperienceItem
          isProject={true}
          title="Walmart Photo Centre"
          imgUrl={walmartImg}
          href="https://www.walmartphotocentre.ca/"
        >
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
        </ExperienceItem>
      </div>
    </section>
  );
};

export default Work;
