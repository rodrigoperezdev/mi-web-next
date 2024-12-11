import React from "react";
import { TechCard } from "./TechCard";

export const Technologies = () => {
  return (
    <div
      className="container
 pt-10  mx-auto md-my-36 my-10 px-6"
    >
      <h2>Technologies</h2>
      <div>
        <div>
          <TechCard imgUrl={"/html5.png"} title="HTML 5" />
          <TechCard imgUrl={"/css3.png"} title="CSS & SCSS" />
          <TechCard imgUrl={"/html5.png"} title="HTML 5" />
        </div>
        <div>
          <TechCard imgUrl={"/html5.png"} title="HTML 5" />
          <TechCard imgUrl={"/html5.png"} title="HTML 5" />
          <TechCard imgUrl={"/html5.png"} title="HTML 5" />
        </div>
      </div>
    </div>
  );
};
