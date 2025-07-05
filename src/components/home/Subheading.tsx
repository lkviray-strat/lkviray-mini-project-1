"use client";
import React from "react";
import Typewriter from "typewriter-effect";
export const Subheading = () => {
  return (
    <h1
      className={`text-[16px] lphone:text-[22px] tablet:text-[20px] laptop:text-[28px] italic opacity-50`}
    >
      <Typewriter
        options={{
          delay: 60,
          strings: [
            "An Aspiring Full Stack Software Engineer",
            "Passionate about Technology and Innovation",
            "Committed to Building Scalable Solutions",
            "Eager to Learn and Grow in the Tech Industry",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default Subheading;
