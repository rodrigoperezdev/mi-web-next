import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <div>
          <a href="#about" className="transition-colors logo">
            LRPH
          </a>
        </div>

        <nav className="rounded-3xl border border-white px-9 py-3 navbar-lg">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#technologies" className=" transition-colors">
                About Me
              </a>
            </li>
            <li>
              <a href="#technologies" className=" transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#experience" className=" transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className=" transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className=" transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <a href="#contact" className="btn contact-lg">
            Contact Me
          </a>
        </div>

        <div className="navbar-sm">
          <div className="ham">
            <input
              id="togglenav"
              className="menu-trigger hidden"
              type="checkbox"
            />
            <label className="burger-wrapper block" htmlFor="togglenav">
              <div className="hamburger"></div>
            </label>
            <nav className="absolute w-screen h-screen top-0 pr-5 sm:pr-11 pt-20 container nav-hidden">
              <ul className="flex flex-col text-right space-x-8 items-end">
                <li className="mb-3">
                  <a href="#about" className=" transition-colors">
                    About Me
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#technologies" className=" transition-colors">
                    Technologies
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#experience" className=" transition-colors">
                    Experience
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#skills" className=" transition-colors">
                    Skills
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#projects" className=" transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="btn">
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
