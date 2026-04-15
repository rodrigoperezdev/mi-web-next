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
          <b> building scalable products</b>
        </h2>

        {/* SCIGON */}
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">Scigon Consulting</h3>
            <div className="font-extralight text-2xl">2025 - current</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Leading front-end architecture and development using <b>Next.js, React, and TypeScript</b>, building scalable and high-performance applications. Defined front-end structure, patterns, and best practices, contributing to technical decisions and improving long-term maintainability.
            <br />
            <br />
            Mentoring junior developers, conducting code reviews, and collaborating with product and design teams to deliver reliable, accessible, and user-focused features.
          </p>
        </div>

        {/* GNP */}
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">GNP Seguros</h3>
            <div className="font-extralight text-2xl">2024 - 2025</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Developed micro frontend applications in a large-scale enterprise environment using Angular, while building features with <b>React, TypeScript, and Next.js</b>. Contributed to defining requirements, planning modules, and aligning technical solutions with business needs.
            <br />
            <br />
            Ensured application quality through testing strategies and collaboration with cross-functional teams, improving system reliability and overall user experience.
          </p>
        </div>

        {/* AdsProject */}
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">AdsProject Media</h3>
            <div className="font-extralight text-2xl">2023 - 2024</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Built responsive web applications using <b>React.js, SASS, and Next.js</b>, improving performance through lazy loading, code splitting, and asset optimization. Delivered SEO-friendly and accessible interfaces in collaboration with UX/UI teams.
          </p>
        </div>

        {/* Cmantica */}
        <div className="my-4 flex flex-col items-end">
          <div className="flex justify-end items-end md:items-baseline flex-col md:flex-row ">
            <h3 className="mr-0 md:mr-4">cmantica studio</h3>
            <div className="font-extralight text-2xl">2021 - 2022</div>
          </div>
          <p className="text-gray-500 max-w-[35rem] text-right">
            Developed SEO-optimized websites using <b>HTML5, CSS, and JavaScript</b>, and built web applications with <b>React.js</b>. Integrated Firebase for authentication and database management, and designed UX/UI in Figma to deliver smooth user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};