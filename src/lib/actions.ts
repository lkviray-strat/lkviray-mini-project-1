"use server";

import { z } from "zod";
import { contactSchema } from "./validations";
import { formatErrors } from "./utils";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { EmailVerificationTemplate } from "@/components/EmailVerificationTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function actionContactForm(
  prevState: unknown,
  formData: FormData
) {
  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  try {
    await contactSchema.parseAsync(formValues);

    await resend.batch.send([
      {
        from: `Portfolio <${process.env.RESEND_DOMAIN}>`,
        to: `${process.env.RESEND_MY_EMAIL}`,
        subject: `Portfolio Contact: Message from ${formValues.name}`,
        react: EmailTemplate({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        }),
      },
      {
        from: `Liam's Portfolio <${process.env.RESEND_DOMAIN}>`,
        to: `${formValues.email}`,
        subject: `Portfolio Contact: Thanks for reaching out!`,
        react: EmailVerificationTemplate({
          name: formValues.name,
          message: formValues.message,
        }),
      },
    ]);

    return {
      status: "SUCCESS",
      error: "",
      fieldErrors: {},
      fieldData: {
        name: "",
        email: "",
        message: "",
      },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const formattedErrors = formatErrors(fieldErrors);

      return {
        status: "ERROR",
        error: "Invalid form data",
        fieldErrors: formattedErrors,
        fieldData: formValues,
      };
    } else {
      return {
        status: "ERROR",
        error: "An unexpected error occurred",
        fieldErrors: {},
        fieldData: formValues,
      };
    }
  }
}
