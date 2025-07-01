"use client";

import React, { useEffect, useState } from "react";
import NavDropDown from "./NavDropdown";
import NavMenu from "./NavMenu";

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
      className={`z-50 top-0 fixed w-full left-1/2 transform -translate-x-1/2 bg-transparent flex items-center justify-center px-4 py-4 transition-opacity duration-300
      ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="bg-[var(--secondaryBg)] shadow-xl h-fit py-3 rounded-xl w-full tablet:w-[600px] items-center justify-center">
        <NavDropDown />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Navbar;
