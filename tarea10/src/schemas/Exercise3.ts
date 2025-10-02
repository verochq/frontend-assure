import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  rating: Yup.number()
    .nullable()
    .required("Selecciona una calificación entre 1 y 5")
    .min(1, "La calificación mínima es 1")
    .max(5, "La calificación máxima es 5"),
  message: Yup.string().when("rating", {
    is: (rating: number | null | undefined) => {
      return typeof rating === 'number' && rating < 3;
    },
    then: (schema) => schema.required("Por favor explica por qué la calificación es menor a 3"),
    otherwise: (schema) => schema.notRequired(),
  }),
});