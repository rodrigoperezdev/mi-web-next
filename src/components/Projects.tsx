import React from "react";
import { Title } from "./ui/Title";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="container pt-10 mx-auto md:my-36 my-10 px-6">
      <Title title="Personal projects" bgTitle="Projects" direction="right" />
      <div className="flex justify-around mt-20 sm:mt-36 flex-wrap">
        <ProjectCard
          imgSrc="images/emprise.png"
          title="Emprise"
          technologies="React Typescript SCSS NodeJS MongoDB"
        />
        <ProjectCard
          imgSrc="images/instindog.png"
          title="instindog.com"
          technologies="HTML Bootstrap JS SEO"
        />
      </div>
    </div>
  );
};
