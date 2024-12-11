export const HomeIntroduction = () => {
  return (
    <div className="container mx-auto md-my-36 my-10 px-6 ">
      <h1>
        Hi! I'm Rodrigo Pérez
        <br /> <b>front-end developer</b>
      </h1>
      <p className="max-w-2xl md:my-10 my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex max-w-2xl justify-between flex-wrap">
        <div className="flex mb-5">
          <span className="text-5xl font-bold">3+</span>
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
          <span className="text-5xl font-bold">24</span>
          <p className=" ml-2">
            Lorem ipsum <br />
            Dolor sit atem
          </p>
        </div>
      </div>
    </div>
  );
};
