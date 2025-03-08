export const HomeIntroduction = () => {
  return (
    <section className="container mx-auto md-my-36 my-10 px-6 py-6 lg:py-0 lg:backdrop-blur-0 backdrop-blur-md backdrop-brightness-75 lg:backdrop-brightness-100 rounded-[4rem]">
      <h1>
        Hi! I'm Rodrigo Pérez
        <br /> <b>full-stack developer</b>
      </h1>
      <p className="max-w-2xl md:my-10 my-5">
        I am a full-stack developer with over 4 years of experience,
        specializing in <b>React, Angular, TypeScript, and Node.js.</b> I am
        passionate about building modern, scalable, and efficient web
        applications, combining frontend and backend technologies such as{" "}
        <b>Next.js, Express, and MongoDB.</b> <br />
        <br />
        My focus is on performance optimization, accessibility, and user
        experience. I thrive in team environments, enjoy collaborating with
        designers, and love turning ideas into functional products. I am always
        eager to improve my skills and stay updated with the latest web
        development trends.
      </p>
      <div className="flex max-w-2xl justify-between flex-wrap">
        <div className="flex mb-5">
          <span className="text-5xl font-bold">4+</span>
          <p className=" ml-2">
            Years <br />
            of experience
          </p>
        </div>
        <div className="flex mb-5">
          <span className="text-5xl font-bold">2</span>
          <p className=" ml-2">
            Languages
            <br /> Spanish and English (B2)
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
