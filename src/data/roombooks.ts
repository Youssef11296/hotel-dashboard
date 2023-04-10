import { RoomBook } from "../models/RoomBook";
import { users } from "./users";
import { rooms } from "./rooms";
import { BOOKING_STATUS } from "../constants";

export const roombooks: RoomBook[] = [
  {
    id: "222",
    number: "#201",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 22,
        relationToCustomer: "daughter",
      },
    ],
    participants: [],
    securityCode: "testcode",
    totalCost: "1000 EGP",
    status: "PENDING",
  },
  {
    id: "111",
    number: "#201",
    customer: users[1],
    roomNumber: rooms[0].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [],
    participants: [],
    securityCode: "testcode",
    totalCost: "1000 EGP",
    status: "ACCEPTED",
  },
  {
    id: "222",
    number: "#201",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 22,
        relationToCustomer: "daughter",
      },
    ],
    participants: [],
    securityCode: "testcode",
    totalCost: "1000 EGP",
    status: "REJECTED",
  },
];
