export type Role = "Customer" | "Admin";

export interface User {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  phone: string;
  whatsApp?: string;
  password: string;
  address: string;
  nationalId: string | number;
  age: number;
  role: Role;
  isVerified: boolean;
  authNumber: number;
}
