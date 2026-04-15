export const HomeIntroduction = () => {
  return (
    <section
      className="mx-auto md-my-36 my-10 py-6 lg:py-0 lg:backdrop-blur-0 backdrop-blur-md backdrop-brightness-75 lg:backdrop-brightness-100 rounded-[4rem] px-5 lg:px-10 xl:px-20 max-w-[1920px]"
      id="about"
    >
      <h1>
        Hi! I'm Rodrigo Pérez
        <br /> <b>Front-End Engineer</b>
      </h1>
      <p className="max-w-2xl md:my-10 my-5">
        I’m a Front-End Engineer with over 5 years of experience building
        scalable, high-performance web applications using{" "}
        <b>React, Next.js, and TypeScript.</b> I specialize in creating
        maintainable, performance-driven solutions with a strong focus on clean
        architecture and user experience. <br />
        <br />I have experience defining front-end architecture, implementing
        best practices, and contributing to technical decisions that improve
        product quality and development workflows. I work closely with product
        and design teams to deliver reliable, accessible, and high-quality
        applications.
      </p>
      <div className="flex max-w-2xl justify-between flex-wrap">
        <div className="flex mb-5">
          <span className="text-5xl font-bold">5+</span>
          <p className=" ml-2">
            Years <br />
            of experience
          </p>
        </div>
        <div className="flex mb-5">
          <span className="text-5xl font-bold">2</span>
          <p className=" ml-2">
            Languages
            <br /> Spanish and English (Professional)
          </p>
        </div>
        <div className="flex">
          <span className="text-5xl font-bold">30+</span>
          <p className=" ml-2">
            Companies & clients <br />
            collaborated with
          </p>
        </div>
      </div>
    </section>
  );
};
