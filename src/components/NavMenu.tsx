import React from "react";
import { navigation } from "@/lib/navigation";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export const NavMenu = () => {
  return (
    <ul className="hidden tablet:flex gap-3 items-center justify-center">
      {navigation.map((item) => (
        <li
          key={item}
          className={`${buttonVariants({
            variant: "default",
          })} text-[18px] font-semibold`}
        >
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}

      <li className="size-fit">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default NavMenu;
