import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Icon } from "@iconify/react";

export const HomeButtons = () => {
  return (
    <div className="flex flex-col lphone:flex-row w-full lphone:w-fit gap-3 laptop:gap-5 items-center mt-7 px-3 justify-center">
      <Link
        href="#about"
        className={`${buttonVariants({
          variant: "default",
        })} flex-1 bg-blue-700 p-4 w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl`}
      >
        Know About Me
      </Link>

      <Link
        download
        href={"/downloads/Liam-Kyle-Viray_CV.pdf"}
        className={`${buttonVariants({
          variant: "default",
        })} flex-1 bg-[var(--secondaryBg)] w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 shadow-xl`}
      >
        Download CV
      </Link>
    </div>
  );
};

export default HomeButtons;
