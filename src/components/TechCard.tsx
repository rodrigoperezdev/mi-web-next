import Image from "next/image";
import React from "react";

interface TechCardProps {
  imgUrl: string;
  title: string;
}

export const TechCard: React.FC<TechCardProps> = ({ imgUrl, title }) => {
  return (
    <figure className="flex flex-col justify-center items-center w-40 h-40 border border-gray-50 rounded-xl bg-gray-700">
      <Image src={imgUrl} alt={title} width={60} height={60} className="mb-6" />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
