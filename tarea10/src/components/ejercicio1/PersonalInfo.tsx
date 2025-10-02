import type { Control, FieldErrors } from "react-hook-form";
import CustomInput from "./CustomInput";
import type { FormValues } from "../../types/types";

interface PersonalInfoProps {
  control: Control<FormValues>;
  errors?: FieldErrors<{ name: string; age: number; email: string }>;
}

const PersonalInfo = ({ control, errors }: PersonalInfoProps) => {
  return (
    <>
      <CustomInput
        control={control}
        error={errors?.name}
        name="name"
        label="Name"
        type="text"
        placeholder="Please type your name"
      />
      <CustomInput
        control={control}
        error={errors?.age}
        name="age"
        label="Age"
        type="number"
        placeholder="Please enter your age"
      />
      <CustomInput
        control={control}
        error={errors?.email}
        name="email"
        label="Email"
        type="email"
        placeholder="Please type your email"
      />
    </>
  );
};

export default PersonalInfo;
