import React from "react";

export const Heading = () => {
  return (
    <h1
      className={` text-[27px] mphone:text-[32px] lphone:text-[38px] tablet:text-[44px] laptop:text-[60px] font-semibold`}
    >
      Hello,{" "}
      <span className="-ml-2 tablet:-ml-4 ">
        I&apos;m
        <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">
          {" "}
          Liam <span className="hidden tablet:inline">Kyle</span>
        </span>
      </span>
    </h1>
  );
};

export default Heading;
