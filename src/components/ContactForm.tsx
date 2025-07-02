import React from "react";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <form
      noValidate
      action=""
      className="flex flex-col gap-4 w-full max-w-[600px]"
    >
      <p className="mt-4 text-center text-[13px] tablet:text-[18px] tablet:text-left">
        Let’s make something awesome together! Send me a message and I’ll get
        right back to you as soon as possible.
      </p>

      <div className="flex flex-col gap-1 mt-5">
        <label
          htmlFor="name"
          className="font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-1 rounded-[12px] p-2 px-3.5"
          placeholder="Example Name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-1 rounded-[12px] p-2 px-3.5 "
          placeholder="example.email@gmail.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="border-1 rounded-[12px] p-2 px-3.5 placeholder-gray-500"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <Button className="my-2 mb-[180px] bg-blue-700 p-4 w-full tablet:w-fit !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
