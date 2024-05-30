import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Canvas from "../components/canvas";
import Menu from "../components/menu";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import favicon from "../assets/images/favicon.ico";
import Projects from "../components/projects";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Canvas />
      <Header />
      <Menu />
      <main>
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Matthew Lindsay</title>
    <link rel="shortcut icon" type="image/x-icon" href={favicon} />
  </>
);
