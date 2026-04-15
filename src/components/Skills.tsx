import { Title } from "./ui/Title";

export const Skills = () => {
  return (
    <section
      className="pt-10 mx-auto md:my-36 my-10 px-5 lg:px-10 xl:px-20 max-w-[1920px] flex justify-between flex-col md:flex-row"
      id="skills"
    >
      <Title title="Skills" bgTitle="Skills" />
      <div className="gap-6 max-w-[34.47rem]">
        <p>
          Front-End Engineer specializing in building scalable and high-performance web applications using <b>React, Next.js, and TypeScript</b>. Experienced in designing front-end architecture, implementing best practices, and delivering maintainable, production-ready solutions.
          <br />
          <br />
          Strong focus on performance optimization, SEO, accessibility, and clean code. Skilled in state management, testing strategies, and modern development workflows to ensure high-quality and reliable applications.
          <br />
          <br />
          Experienced collaborating with product and design teams, contributing to technical decisions, and translating business requirements into efficient and user-focused solutions.
        </p>
      </div>
    </section>
  );
};