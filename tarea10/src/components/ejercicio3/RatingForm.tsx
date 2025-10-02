import { useState, type JSX } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormValuesFormik } from "../../types/types";
import { validationSchema } from "../../schemas/Exercise3";

const initialValues: FormValuesFormik = {
  name: "",
  rating: null,
  message: "",
};

export default function RatingForm(): JSX.Element {
  const [submitted, setSubmitted] = useState<FormValuesFormik | null>(null);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="form-container">
      <h2>Formulario de valoración</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitted(values);
            setSubmitting(false);
            resetForm();
          }, 300);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="Form-rating">
            {/* Name */}
            <div>
              <label className="Form-rating__name" htmlFor="name">
                Nombre
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="Form-rating__name-input"
              />
              <div className="Form-rating__name-error">
                <ErrorMessage name="name" />
              </div>
            </div>

            {/* Estrellas */}
            <div>
              <span className="Form-rating__rating-label">Calificación</span>
              <div className="Form-rating__rating-stars">
                {stars.map((s) => {
                  const filled = (values.rating ?? 0) >= s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setFieldValue("rating", s);
                        if (s >= 3) {
                          setFieldValue("message", "");
                        }
                      }}
                      aria-label={`Calificar ${s} estrella${s > 1 ? "s" : ""}`}
                      className={`Form-rating__rating-star--star ${
                        filled ? "" : "opacity-50"
                      }`}
                    >
                      {filled ? "★" : "☆"}
                    </button>
                  );
                })}
              </div>
              <div className="Form-rating__rating-error">
                <ErrorMessage name="rating" />
              </div>
            </div>

            {/* Message: solo se muestra si rating < 3 */}
            {values.rating !== null && values.rating < 3 && (
              <div>
                <label className="Form-rating__message-label" htmlFor="message">
                  Comentario
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Cuéntanos por qué otorgaste esta calificación"
                  rows={4}
                  className="Form-rating__message-input"
                />
                <div className="Form-rating__message-error">
                  <ErrorMessage name="message" />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="Form-rating__submit-button"
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Resultado enviado */}
      {submitted && (
        <div className="Form-rating__result">
          <h3 className="Form-rating__result-title">Contenido enviado</h3>
          <p>
            <strong>Nombre:</strong> {submitted.name}
          </p>
          <p>
            <strong>Calificación:</strong> {submitted.rating} / 5
          </p>
          <p>
            <strong>Comentario:</strong> {submitted.message || "(sin comentario)"}
          </p>
          <pre className="Form-rating__result-json">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}