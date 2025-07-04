import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatErrors(
  errors: Record<string, string[] | undefined>
): Record<string, string> {
  const formattedErrors: Record<string, string> = {};

  for (const key in errors) {
    const errorArray = errors[key];
    if (Array.isArray(errorArray)) {
      formattedErrors[key] = errorArray.join(". ");
    }
  }

  return formattedErrors;
}
export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};
