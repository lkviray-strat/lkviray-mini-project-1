import React from "react";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="z-50 top-0 sticky bg-transparent flex items-center justify-center px-2 py-4">
      <nav className="bg-[var(--secondaryBg)] border-1 rounded-xl w-[600px] py-3 items-center justify-center">
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
