import { Controller, type Control, type FieldError } from "react-hook-form";
import type { FormValues } from "../../types/types";

interface CustomInputProps {
  control: Control<FormValues>;
  error?: FieldError;
  name: string;
  label: string;
  type?: "text" | "number" | "email";
  placeholder?: string;
}

const CustomInput = ({
  control,
  error,
  name,
  label,
  type = "text",
  placeholder,
}: CustomInputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <Controller
        name={name as keyof FormValues}
        control={control}
        render={({ field }) => (
          <input type={type} id={name} placeholder={placeholder} {...field} />
        )}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default CustomInput;
