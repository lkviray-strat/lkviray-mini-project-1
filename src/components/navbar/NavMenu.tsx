"use client";

import { navigation } from "@/lib/data/navigation";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { buttonVariants } from "../ui/button";

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
          <Link href={`#${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}

      <li className="size-fit">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default NavMenu;
