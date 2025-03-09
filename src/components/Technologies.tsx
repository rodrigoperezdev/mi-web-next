import React from "react";
import { TechCard } from "./TechCard";

const technologies = [
  { imgUrl: "/html5.png", title: "HTML 5" },
  { imgUrl: "/css3.png", title: "CSS & SCSS" },
  { imgUrl: "/javascript.png", title: "JavaScript" },
  { imgUrl: "/react.png", title: "React" },
  { imgUrl: "/typescript.png", title: "TypeScript" },
  { imgUrl: "/angular.png", title: "Angular" },
];

export const Technologies = () => {
  return (
    <section
      className="pt-10 mx-auto md:my-36 my-10 z-10 relative px-5 lg:px-10 xl:px-20 max-w-[1920px]"
      id="technologies"
    >
      <h2 className="mb-6 relative">
        Main technologies
        <img
          src="technologies.svg"
          aria-hidden="true"
          className="title-background"
        />
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[34.2rem] max-w-full">
        {technologies.map((tech, index) => (
          <TechCard key={index} imgUrl={tech.imgUrl} title={tech.title} />
        ))}
      </div>
    </section>
  );
};
