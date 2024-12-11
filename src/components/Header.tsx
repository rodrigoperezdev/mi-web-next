"use client";
import Image from "next/image";
import React, { useState } from "react";

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

  return (
    <header className="w-full fixed backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <a href="#about" className="transition-colors logo">
            <Image height={60} width={35} src={"/logo.svg"} alt="logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex rounded-3xl border border-white px-9 py-3 navbar-lg">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a href="#contact" className="btn contact-lg">
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
            <div className="hamburger"></div>
          </button>
          {isMenuOpen && (
            <nav className="absolute w-screen h-screen top-0 right-0 bg-black text-white pt-20 pr-5">
              <ul className="flex flex-col text-right space-y-3 items-end">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
