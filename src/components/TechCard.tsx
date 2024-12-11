import Image from "next/image";
import React from "react";

interface TechCardProps {
  imgUrl: string;
  title: string;
}

export const TechCard: React.FC<TechCardProps> = ({ imgUrl, title }) => {
  return (
    <div>
      <Image src={imgUrl} alt={title} className="w-14" width={60} height={60} />
      <p>{title}</p>
    </div>
  );
};
