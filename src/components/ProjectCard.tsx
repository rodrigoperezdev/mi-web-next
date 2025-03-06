import React from "react";

interface ProjectCardProps {
  imgSrc?: string;
  title?: string;
  technologies?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc = "",
  title = "",
  technologies = "",
}) => {
  return (
    <div className="pt-6 pb-3 px-6 project-card rounded-xl">
      <img src={imgSrc} alt={title} className="rounded-lg" />
      <div className="flex justify-between items-end pt-2">
        <h6>{title}</h6>
        <span>{technologies}</span>
      </div>
    </div>
  );
};
