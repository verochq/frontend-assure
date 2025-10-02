import type { FormValues } from "../../types/types";

interface ReviewProps {
  values: FormValues;
}

const Review = ({ values }: ReviewProps) => {
  return (
    <div>
      <h3>Review your information</h3>

      <h4>Personal Info</h4>
      <p><strong>Name:</strong> {values.name}</p>
      <p><strong>Age:</strong> {values.age}</p>
      <p><strong>Email:</strong> {values.email}</p>

      <h4>Address</h4>
      <p><strong>Country:</strong> {values.country}</p>
      <p><strong>City:</strong> {values.city}</p>
      <p><strong>Zip Code:</strong> {values.zipCode}</p>

      <h4>Preferences</h4>
      <p><strong>Preferred Contact:</strong> {values.preferredContactMethod}</p>
      <p><strong>Subscribe to Newsletter:</strong> {values.subscribeToNewsletter ? "Yes" : "No"}</p>
      <p><strong>Favorite Category:</strong> {values.favoriteCategory}</p>
    </div>
  );
};

export default Review;
