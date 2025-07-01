import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { navigation } from "@/lib/navigation";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export const NavDropDown = () => {
  return (
    <ul className="tablet:hidden flex items-center justify-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <li
            className={`${buttonVariants({
              variant: "default",
            })} text-[18px] font-semibold`}
          >
            Navigation
          </li>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
          <div className="bg-[var(--secondaryBg)] !p-0 !py-2 border-0 mt-6 shadow-xl rounded-lg w-[200px]">
            {navigation.map((item) => (
              <DropdownMenuItem
                key={item}
                className="text-[15px] px-5 py-3 font-semibold hover:bg-[var(--hoverBg)] active:bg-[var(--activeBg)] active:scale-95"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <li className="size-fit">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default NavDropDown;
