import * as React from "react";
import ScrollInView from "./scrollInView";
import playlistImg from "../assets/images/work-playlist.png";
import ExperienceItem from "./experienceItem";

const Projects: React.FC = () => {
  return (
    <section id="work" className="section-work section-full">
      <div>
        <ScrollInView className="container -anim-fade-up">
          <h2 className="section-header">Projects</h2>
        </ScrollInView>

        <ExperienceItem
          isProject={true}
          title="AI Playlist Maker"
          subtitle="work in progress"
          imgUrl={playlistImg}
          href="https://github.com/DevMattLindsay/ai-playlist-maker"
        >
          <p className="experience-description">
            A NextJS web app that uses Google's Gemini AI to generate a playlist
            based on a user prompt. As well as the Spotify API to gather songs
            and publish the playlist.
          </p>
          <p className="experience-description">
            Makes use of NextJS route handlers to keep API keys secure on the
            server.
          </p>
        </ExperienceItem>
      </div>
    </section>
  );
};

export default Projects;
