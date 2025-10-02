import { useForm } from "react-hook-form";
import StepContent from "./StepContent";
import { useState, useEffect } from "react";
import type { FormValues } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { fullSchema, stepFields } from "../../schemas/Exercise1"

const STORAGE_KEY = "multiStepForm";

const multiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Cargar valores guardados si existen
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData: FormValues | null = savedData ? JSON.parse(savedData) : null;

  const {
    control,
    formState: { errors },
    handleSubmit,
    trigger,
    watch,
    getValues,
  } = useForm<FormValues>({
    resolver: yupResolver(fullSchema),
    defaultValues: parsedData || {
      name: "",
      age: null,
      email: "",
      country: "",
      city: "",
      zipCode: "",
      preferredContactMethod: "",
      subscribeToNewsletter: false,
      favoriteCategory: "",
    },
    mode: "onBlur",
  });

  const watchedValues = watch();
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedValues));
  }, [watchedValues]);

  const handleNext = async () => {
    const valid = await trigger(stepFields[currentStep]); 
    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

 
  const onSubmit = (data: FormValues) => {
    console.log("Formulario enviado", data);
    localStorage.removeItem(STORAGE_KEY); // limpiar storage después de enviar
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepContent
          currentStep={currentStep}
          control={control}
          errors={errors}
          values={getValues()}
        />

        <div style={{ marginTop: "1rem" }}>
          {/* Back no aparece en el primer paso */}
          {currentStep > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}

          {/* Next o Submit */}
          {currentStep < 4 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default multiStepForm;
