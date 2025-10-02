import type { Control, FieldErrors } from "react-hook-form";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Preference from "./Preference";
import Review from "./Review";
import type { FormValues } from "../../types/types";

interface StepContentProps {
  currentStep: number;
  control: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
  values: FormValues;
}

const StepContent = ({ currentStep, control, errors, values }: StepContentProps) => {
  switch (currentStep) {
    case 1:
      return <PersonalInfo control={control} errors={errors} />;
    case 2:
      return <Address control={control} errors={errors} />;
    case 3:
      return <Preference control={control} errors={errors} />;
    case 4:
      return <Review values={values} />;
    default:
      return null;
  }
};

export default StepContent;
