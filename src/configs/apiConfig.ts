export const baseUrl = "http://localhost:1234/api";

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
  auth: {},
};
