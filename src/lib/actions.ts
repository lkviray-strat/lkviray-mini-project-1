"use server";

import { z } from "zod";
import { contactSchema } from "./validations";
import { formatErrors } from "./utils";

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
