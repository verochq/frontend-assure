import type { Control, FieldErrors } from "react-hook-form";
import CustomInput from "./CustomInput";
import type { FormValues } from "../../types/types";

interface AdressProps {
  control: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
}

const Adress = ({ control, errors }: AdressProps) => {
  return (
    <>
      <CustomInput
        control={control}
        error={errors?.country}
        name="country"
        label="Country"
      />
      <CustomInput
        control={control}
        error={errors?.city}
        name="city"
        label="City"
      />
      <CustomInput
        control={control}
        error={errors?.zipCode}
        name="zipCode"
        label="ZipCode"
      />
    </>
  );
};

export default Adress;
