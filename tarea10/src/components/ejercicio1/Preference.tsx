import { Controller, type Control, type FieldErrors } from "react-hook-form";
import type { FormValues } from "../../types/types";

interface PreferenceProps {
  control: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
}

const Preference = ({ control, errors }: PreferenceProps) => {
  return (
    <>
      {/* Radio buttons */}
      <label>Preferred Contact Method: </label>
      <Controller
        control={control}
        name="preferredContactMethod"
        render={({ field }) => (
          <>
            <label htmlFor="email">Email</label>
            <input
              {...field}
              type="radio"
              id="email"
              value="Email"
              checked={field.value === "Email"}
            />

            <label htmlFor="phone">Phone</label>
            <input
              {...field}
              type="radio"
              id="phone"
              value="Phone"
              checked={field.value === "Phone"}
            />

            <label htmlFor="whatsapp">WhatsApp</label>
            <input
              {...field}
              type="radio"
              id="whatsapp"
              value="WhatsApp"
              checked={field.value === "WhatsApp"}
            />
          </>
        )}
      />
      {errors?.preferredContactMethod && (
        <p>{errors.preferredContactMethod.message}</p>
      )}

      {/* Checkbox */}
      <div>
        <Controller
          control={control}
          name="subscribeToNewsletter"
          render={({ field }) => (
            <label>
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              Subscribe to Newsletter?
            </label>
          )}
        />
      </div>

      {/* Select */}
      <div>
        <label htmlFor="favoriteCategory">Favorite Category:</label>
        <Controller
          control={control}
          name="favoriteCategory"
          render={({ field }) => (
            <select id="favoriteCategory" {...field}>
              <option value="">-- Select --</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Art">Art</option>
              <option value="Travel">Travel</option>
            </select>
          )}
        />
        {errors?.favoriteCategory && (
          <p>{errors.favoriteCategory.message}</p>
        )}
      </div>
    </>
  );
};

export default Preference;
