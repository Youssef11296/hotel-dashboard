import { User } from "../models/User";

export const users: User[] = [
  {
    id: "0111",
    name: "Admin",
    email: "admin@test.com",
    phone: "+0201020303030",
    whatsApp: "+0201020303030",
    address: "Cairo, Egypt",
    password: "admin",
    nationalId: "30003033327279",
    age: 23,
    role: "Admin",
    isVerified: true,
  },
  {
    id: "111",
    name: "Alaa",
    email: "alaa@test.com",
    phone: "+0201020303030",
    whatsApp: "+0201020303030",
    address: "Cairo, Egypt",
    password: "123123",
    nationalId: "30003033327279",
    age: 23,
    role: "Customer",
    isVerified: true,
  },
  {
    id: "333",
    name: "Ayman",
    email: "memeo@test.com",
    phone: "+0201020303030",
    whatsApp: "+0201020303030",
    address: "Cairo, Egypt",
    password: "123123",
    nationalId: "30023033327279",
    age: 24,
    role: "Customer",
    isVerified: false,
  },
  {
    id: "444",
    name: "Mina",
    email: "monmon@test.com",
    phone: "+0201020303030",
    whatsApp: "+0201020303030",
    address: "Cairo, Egypt",
    password: "123123",
    nationalId: "30002233327279",
    age: 40,
    role: "Customer",
    isVerified: false,
  },
];
