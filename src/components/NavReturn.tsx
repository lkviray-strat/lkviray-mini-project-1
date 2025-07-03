import React from "react";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export const NavReturn = () => {
  return (
    <ul className="flex gap-3 items-center justify-center">
      <li
        className={`${buttonVariants({
          variant: "default",
        })} text-[18px] font-semibold`}
      >
        <Link href="/#projects">Return</Link>
      </li>

      <li className="size-fit">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default NavReturn;
