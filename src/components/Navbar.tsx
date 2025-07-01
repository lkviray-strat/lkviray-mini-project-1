"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landingHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollThreshold = landingHeight * 0.75;
      const scrollPosition = window.scrollY;

      setShowNavbar(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 top-0 fixed left-1/2 transform -translate-x-1/2 bg-transparent flex items-center justify-center px-2 py-4 transition-opacity duration-300
      ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="bg-[var(--secondaryBg)] shadow-xl rounded-xl w-[600px] py-3 items-center justify-center">
        <ul className="flex gap-3 items-center justify-center">
          <li
            className={`${buttonVariants({
              variant: "default",
            })} text-[18px] font-semibold`}
          >
            <a href="#">Home</a>
          </li>
          <li
            className={`${buttonVariants({
              variant: "default",
            })} text-[18px] font-semibold`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`${buttonVariants({
              variant: "default",
            })} text-[18px] font-semibold`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`${buttonVariants({
              variant: "default",
            })} text-[18px] font-semibold`}
          >
            <a href="#contact">Contact</a>
          </li>
          <li className="size-fit">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
