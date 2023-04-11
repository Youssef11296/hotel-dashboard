import axios from "axios";
import { User } from "../models/User";

export const baseUrl = "http://localhost:3000/api";

export const END_POINT = {
  auth: {
    LOGIN: "auth/login",
    SIGNUP: "auth/signup",
    ME: "auth/me",
  },
  rooms: {
    GET_ROOMS: "rooms/all",
    GET_ROOM_BY_ID: "rooms/:roomId",
  },
  bookings: {
    GET_BOOKINGS: "bookings/all",
    GET_BY_ID: "bookings/:bookingId",
  },
  customers: {
    GET_CUSTOMERS: "customers/all",
    GET_BY_ID: "customers/:customerId",
  },
};

export const API = {
  auth: {
    LOGIN: ({ email, password }: { email: string; password: string }) =>
      axios.post(`${baseUrl}/${END_POINT.auth.LOGIN}`, { email, password }),
  },
  rooms: {
    GET_ROOMS: () => axios.get(`${baseUrl}/${END_POINT.rooms.GET_ROOMS}`),
  },
  customers: {
    GET_CUSTOMERS: () => axios.get(`${baseUrl}/${END_POINT.customers.GET_CUSTOMERS}`),
  },
  bookings: {
    GET_BOOKINGS: () => axios.get(`${baseUrl}/${END_POINT.bookings.GET_BOOKINGS}`),
  },
};
