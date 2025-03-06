import React from "react";

interface TitleProps {
  title: string;
  bgTitle: string;
  direction?: string;
}

export const Title: React.FC<TitleProps> = ({
  title,
  bgTitle,
  direction = "left",
}) => {
  return (
    <h2
      className={
        direction === "left" ? "mb-6 relative" : "mb-6 relative text-end"
      }
    >
      {title}
      <span
        className={
          direction === "left"
            ? "title-background left"
            : "title-background right"
        }
      >
        {bgTitle}
      </span>
    </h2>
  );
};
