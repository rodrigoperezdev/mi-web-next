"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#technologies", label: "Technologies" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

/**
 * Header component for the website.
 * Includes a responsive navbar with links to different sections.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      router.push(href);
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex items-center justify-between py-4 px-5 lg:px-10 xl:px-20 max-w-[1920px]">
        {/* Logo */}
        <div>
          <a
            href="#about"
            className="transition-colors logo"
            onClick={(e) => handleNavigation(e, "#about")}
          >
            <Image height={60} width={35} src={"/icons/logo.svg"} alt="logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex rounded-3xl border border-white px-9 py-3 navbar-lg">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors"
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="https://www.linkedin.com/in/rpdev/"
            className="btn contact-lg"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="burger-wrapper block"
          >
            <div className={isMenuOpen ? "hamburger open" : "hamburger"}></div>
          </button>

          <nav className={isMenuOpen ? "navbar-sm open" : "navbar-sm"}>
            <ul className="flex flex-col text-right items-end">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={isMenuOpen ? "mobile-links open" : "mobile-links"}
                >
                  <a
                    href={link.href}
                    className="transition-colors"
                    onClick={(e) => handleNavigation(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
