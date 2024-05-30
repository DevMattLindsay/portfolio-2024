import * as React from "react";
import ScrollInView from "./scrollInView";

type ExperienceItemProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  imgUrl: string;
  href: string;
  isProject?: boolean;
};

const ExperienceItem = ({
  title,
  subtitle,
  children,
  imgUrl,
  href,
  isProject = false,
}: ExperienceItemProps) => {
  return (
    <ScrollInView
      className={`container row work-row -anim-fade-up ${
        isProject ? "work-project" : ""
      }`}
    >
      <div className="col-lg-8 work-experience">
        <a href={href} className="work-link">
          {isProject ? (
            <h4 className="experience-title-project">{title}</h4>
          ) : (
            <h3 className="experience-title">{title}</h3>
          )}
        </a>
        {subtitle ? <p className="experience-subtitle">{subtitle}</p> : null}
        {children}
      </div>
      <a href={href} className="col-lg-4 work-block" target="_blank">
        <img className="work-block-image" src={imgUrl} alt={title} />
        <div className="work-block-overlay">
          <span>visit</span>
        </div>
      </a>
    </ScrollInView>
  );
};

export default ExperienceItem;
