///////////
////////// EJERCICIO 1
//////////

export interface FormValues {
  name: string;
  age: number | null;
  email: string;

  country: string;
  city: string;
  zipCode: string;

  preferredContactMethod: "Email" | "Phone" | "WhatsApp" | "";
  subscribeToNewsletter: boolean;
  favoriteCategory: "Technology" | "Health" | "Art" | "Travel" | "";
}

///////////
////////// EJERCICIO 2
//////////

export interface SocialMedia {
  platform: string;
  url: string;
};

///////////
////////// EJERCICIO 3
//////////
export interface FormValuesFormik {
  name: string;
  rating: number | null;
  message: string;
};
