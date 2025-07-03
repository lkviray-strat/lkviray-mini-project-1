"use client";

import React, { useActionState, useEffect } from "react";
import { Button } from "./ui/button";
import { actionContactForm } from "@/lib/actions";
import FormErrorMessage from "./FormErrorMessage";
import { toast } from "sonner";
import ToastCustom from "./ToastCustom";

export const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    actionContactForm,
    undefined
  );

  useEffect(() => {
    if (state?.status === "SUCCESS") {
      toast.custom(() => (
        <ToastCustom type="SUCCESS">Message sent successfully!!</ToastCustom>
      ));
    } else if (state?.status === "ERROR" && state.fieldErrors === null) {
      toast.custom(() => (
        <ToastCustom type="ERROR">
          Unexpected error occurred. Try again later.
        </ToastCustom>
      ));
    }
  }, [state]);

  return (
    <form
      noValidate
      action={action}
      className="flex flex-col gap-4 w-full max-w-[600px] tablet:ml-2"
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
          Name<span className="text-red-500 text-[12px] align-super">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={state?.fieldData?.name}
          className="border-1 rounded-[12px] p-2 px-3.5 focus:outline-blue-600"
          placeholder="Example Name"
        />
        <FormErrorMessage
          error={state?.fieldErrors}
          errorFor="name"
          isMultiLine={true}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="font-semibold"
        >
          Email<span className="text-red-500 text-[12px] align-super">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state?.fieldData?.email}
          className="border-1 rounded-[12px] p-2 px-3.5 focus:outline-blue-600"
          placeholder="example.email@gmail.com"
        />
        <FormErrorMessage
          error={state?.fieldErrors}
          errorFor="email"
          isMultiLine={true}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="font-semibold"
        >
          Message
          <span className="text-red-500 text-[12px] align-super">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          maxLength={500}
          defaultValue={state?.fieldData?.message}
          className="border-1 rounded-[12px] p-2 px-3.5 placeholder-gray-500 focus:outline-blue-600"
          placeholder="Type your message here..."
        ></textarea>
        <FormErrorMessage
          error={state?.fieldErrors}
          errorFor="message"
          isMultiLine={true}
        />
      </div>

      <Button
        disabled={isPending}
        type="submit"
        className="my-2 mb-[180px] bg-blue-700 p-4 w-full tablet:w-fit !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl"
      >
        {isPending ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
