"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavDropDown from "./NavDropdown";
import NavMenu from "./NavMenu";
import NavReturn from "./NavReturn";

export const Navbar = () => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(pathname != "/" ? true : false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const landingHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollThreshold = landingHeight * 0.75;
      const scrollPosition = window.scrollY;

      if (!isHome) {
        setShowNavbar(true);
      } else {
        setShowNavbar(scrollPosition >= scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const landingHeight = document.getElementById("home")?.offsetHeight || 0;
    const scrollThreshold = landingHeight * 0.75;
    const scrollPosition = window.scrollY;

    if (!isHome) {
      setShowNavbar(true);
    } else {
      setShowNavbar(scrollPosition >= scrollThreshold);
    }
  }, [pathname]);

  return (
    <header
      className={`z-50 top-0 fixed w-full left-1/2 transform -translate-x-1/2 bg-transparent flex items-center justify-center px-4 py-4 transition-opacity duration-300
      ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {isHome ? (
        <nav className="bg-[var(--secondaryBg)] shadow-xl h-fit py-1.5 tablet:py-3 rounded-xl w-full tablet:w-[600px] items-center justify-center">
          <NavDropDown />
          <NavMenu />
        </nav>
      ) : (
        <nav className="bg-[var(--secondaryBg)] shadow-xl h-fit py-1.5 talet:py-3 rounded-xl w-full mphone:w-[350px] items-center justify-center">
          <NavReturn />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
