import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { type SocialMedia } from '../../types/types';

const PLATFORMS = [
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'github', label: 'GitHub' },
];

type FormValues = {
  socialMedia: SocialMedia[];
};

const isValidUrl = (str: string): boolean => {
  if (!str || typeof str !== 'string') return false;
  const trimmed = str.trim();
  if (!trimmed) return false;

  const URL_REGEX = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  return URL_REGEX.test(trimmed);
};

const SocialMediaForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      socialMedia: [{ platform: '', url: '' }],
    },
    mode: 'onSubmit',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialMedia',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Formulario válido. Datos:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="social-media-form">
      <h2>Redes Sociales</h2>

      <div className="social-links">
        {fields.map((field, index) => (
          <div key={field.id} className="social-link">
            <div className="link-header">
              <span>Enlace #{index + 1}</span>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="remove-button"
                >
                  Eliminar
                </button>
              )}
            </div>

            {/* Selector de plataforma */}
            <Controller
              control={control}
              name={`socialMedia.${index}.platform`}
              rules={{ required: 'Requerido' }}
              render={({ field }) => (
                <select {...field} className="platform-select">
                  <option value="">Selecciona</option>
                  {PLATFORMS.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.socialMedia?.[index]?.platform && (
              <span className="error">
                {errors.socialMedia[index].platform.message}
              </span>
            )}

            {/* Input de URL */}
            <Controller
              control={control}
              name={`socialMedia.${index}.url`}
              rules={{
                required: 'Requerido',
                validate: (value) => isValidUrl(value) || 'URL no válida',
              }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="ej: https://www.w3schools.com"
                  className="url-input"
                />
              )}
            />
            {errors.socialMedia?.[index]?.url && (
              <span className="error">
                {errors.socialMedia[index].url.message}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="form-footer">
        <button
          type="button"
          onClick={() => fields.length < 5 && append({ platform: '', url: '' })}
          disabled={fields.length >= 5}
          className="add-button"
        >
          + Añadir
        </button>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default SocialMediaForm;