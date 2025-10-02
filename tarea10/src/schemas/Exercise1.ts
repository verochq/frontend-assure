import * as yup from "yup";
import type { FormValues } from "../types/types";

export const step1Schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(14, "You must be at least 14 years old"),
  email: yup.string().required("Email is required").email("Invalid email"),
});

export const step2Schema = yup.object({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),

  zipCode: yup
    .string()
    .required("Zip code is required")
    .matches(/^\d{4,10}$/, "Zip code must be numeric (4-10 digits)"),
});

export const step3Schema = yup.object({
  preferredContactMethod: yup
    .string()
    .required("Choose a contact method"),
  subscribeToNewsletter: yup.boolean(),
  favoriteCategory: yup
    .string()
    .required("Choose a favorite category"),
});

export const fullSchema: yup.ObjectSchema<any> = step1Schema
  .concat(step2Schema)
  .concat(step3Schema);

export const stepFields: Record<number, (keyof FormValues)[]> = {
  1: ["name", "age", "email"],
  2: ["country", "city", "zipCode"],
  3: ["preferredContactMethod", "favoriteCategory"],
};
