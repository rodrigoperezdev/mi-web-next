export const Experience = () => {
  return (
    <section
      className="flex justify-between flex-col md:flex-row backdrop-blur-sm pt-28 md:pt-36 mt-[-7rem] rounded-3xl w-full px-5 lg:px-10 xl:px-20 max-w-[1920px] mx-auto"
      id="experience"
    >
      <div className="left-[-1.5rem] lg:left-[-2.5rem] xl:left-[-5rem] w-52 md:w-[34.5rem] relative">
        <img src="/images/moon.png" alt="Moon" />
      </div>
      <div>
        <h2 className="text-right experience-title">
          My experience
          <b> in 3 companies</b> so far
        </h2>
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">GNP Seguros</h3>
            <div className="font-extralight text-2xl">2024 - current</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Working via GTEC Software developing micro frontends in Angular and
            full-stack applications with{" "}
            <b>React, TypeScript, Node.js, Express, and MongoDB</b> for other
            GTEC clients. Implementing unit and integration tests using{" "}
            <b>Jest, Jasmine, and Karma.</b> Collaborating on UX/UI designs in{" "}
            <b>Figma.</b>
            <br />
            <br />
            Drafting functional requirements documentation, considering business
            scope and ensuring integration with other system areas for seamless
            interoperability.
          </p>
        </div>
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">AdsProject Media</h3>
            <div className="font-extralight text-2xl">2023 - 2024</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Built responsive web applications with{" "}
            <b>React.js, SASS, and HTML5</b>, ensuring cross-browser
            compatibility and SEO optimized websites with <b>Next.js</b>.
            Improved performance with lazy loading, code splitting, and asset
            optimization. Worked closely with UX/UI teams to enhance
            accessibility.
          </p>
        </div>
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">cmantica studio</h3>
            <div className="font-extralight text-2xl">2021 - 2022</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Developed SEO-optimized websites using <b>HTML5, CSS, JavaScript</b>
            . Web applications using <b>React.js</b>. Integrated <b>Firebase</b>{" "}
            for authentication and database management. Designed UX/UI in{" "}
            <b>Figma</b>, ensuring a seamless user experience.
          </p>
        </div>
      </div>
    </section>
  );
};
