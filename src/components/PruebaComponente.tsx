import React from "react";

interface PruebaComponenteProps {
  name: string;
  results: any[];
}

export const PruebaComponente: React.FC<PruebaComponentesProps> = ({
  name,
  results,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
