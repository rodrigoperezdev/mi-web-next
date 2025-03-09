import { Title } from "./ui/Title";

export const Skills = () => {
  return (
    <section
      className="pt-10 mx-auto md:my-36 my-10 px-5 lg:px-10 xl:px-20 max-w-[1920px] flex justify-between flex-col md:flex-row"
      id="skills"
    >
      <Title title="Skills" bgTitle="Skills" />
      <div className="  gap-6 max-w-[34.47rem]">
        <p>
          Proficient in React, Angular, and TypeScript, crafting dynamic and
          scalable web applications. Experienced in Node.js, Express, and
          MongoDB, ensuring efficient backend development and API integrations.
          <br />
          <br />
          Skilled in state management (Redux), testing (Jest, Jasmine, Karma),
          and CI/CD workflows. Passionate about clean code, performance
          optimization, and UI/UX collaboration using Figma to enhance user
          experience. <br />
          <br />
          Strong team player and communicator, with the ability to translate
          business needs into technical solutions. Adaptable, proactive, and
          always eager to learn and improve, ensuring continuous growth in a
          fast-evolving industry. Great self learner eager to learn new things
          in a fast pace environment.
        </p>
      </div>
    </section>
  );
};
