export const Experience = () => {
  const experience = [
    {
      name: "cmantica studio",
      years: "2021 - 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "AdsProject Media",
      years: "2023 - 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "GNP Seguros",
      years: "2024 - current",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="flex justify-between backdrop-blur-sm pt-36 mt-[-3rem] rounded-3xl pr-20 2xl:pr-36">
      <div>
        <img src="/moon.png" alt="Moon" />
      </div>
      <div>
        <h2 className="text-right">
          My experience
          <b> in 3 companies</b> so far
        </h2>
        {experience.map((exp) => (
          <div className="my-4 flex flex-col items-end " key={exp.name}>
            <div className="flex justify-end items-baseline">
              <h3 className="mr-4">{exp.name}</h3>
              <span className="font-extralight text-2xl">{exp.years}</span>
            </div>
            <p className="text-gray-500 w-96 text-right">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
