export type Role = "Customer" | "Admin";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  google_authenticator_code: string;
  is_verified: boolean;
  is_admin: boolean;
}
