import { Model, createServer } from "miragejs";
import { baseUrl } from "./configs/apiConfig";
import { END_POINT } from "./configs/apiConfig";
import { rooms } from "./data/rooms";
import { users } from "./data/users";
import { roombooks } from "./data/roombooks";

const createMockServer = () => {
  const server = createServer({
    models: {
      room: Model,
      user: Model,
      roombook: Model,
    },
    seeds(server) {
      rooms.map((room) => {
        server.create("room", room);
      });
      users.map((user) => {
        server.create("user", user);
      });
      roombooks.map((roombook) => {
        server.create("roombook", roombook);
      });
    },
    routes() {
      this.urlPrefix = baseUrl;
      this.namespace = "";

      this.post(END_POINT.auth.LOGIN, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const { email } = JSON.parse(request.requestBody);
        console.log("LOGIN", email);
        const user = schema.all("user").filter((user: any) => user.email === email).models[0];
        console.log("USER", user);
        if (user) {
          response.success = true;
        } else {
          response.message === "Invalid credentials.";
        }
        return { ...response, user };
      });

      this.post(END_POINT.auth.SIGNUP, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const { email } = JSON.parse(request.requestBody);
        const user = schema.all("user").filter((user: any) => user.email === email).models[0];
        if (user) {
          response.success = false;
          response.message === "User already exists.";
          response.message === "User already exists.";
          return { ...response };
        }
        return { ...response };
      });

      this.get(END_POINT.rooms.GET_ROOMS, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const rooms = schema.all("room").models;
        return { ...response, rooms };
      });

      this.get(END_POINT.customers.GET_CUSTOMERS, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const users = schema.all("user").models;
        const customers = users.filter((user: any) => user.is_admin === false);
        return { ...response, customers };
      });

      this.get(END_POINT.bookings.GET_BOOKINGS, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const bookings = schema.all("roombook").models;
        return { ...response, bookings };
      });

      this.get(END_POINT.rooms.GET_ROOM_BY_ID, (schema, request) => {
        const { roomId } = request.params;
        const response = { success: false, message: "", error: "" };
        const room = schema.all("room").models.filter((room) => room.id === roomId);
        return { ...response, room };
      });

      this.get(END_POINT.bookings.GET_BOOKINGS, (schema, request) => {
        const response = { success: false, message: "", error: "" };
        const bookings = schema.all("booking").models;
        return { ...response, bookings };
      });

      this.get(END_POINT.bookings.GET_BY_ID, (schema, request) => {
        const { bookingId } = request.params;
        const response = { success: false, message: "", error: "" };
        const booking = schema.all("booking").models.filter((booking) => booking.id === bookingId);
        return { ...response, booking };
      });
    },
  });
  console.log("SERVER CREATED!");
  return server;
};

export { createMockServer };
