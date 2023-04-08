import { RoomBook } from "../models/RoomBook";
import { customers } from "./customers";
import { rooms } from "./rooms";

export const roombooks: RoomBook[] = [
  {
    id: "#111",
    number: "#201",
    customer: customers[0],
    roomNumber: rooms[0].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [],
    participants: [],
    securityCode: "testcode",
    totalCost: "1000 EGP",
  },
  {
    id: "#222",
    number: "#201",
    customer: customers[1],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        name: "Maram",
        age: 22,
        relationToCustomer: "daughter",
      },
    ],
    participants: [],
    securityCode: "testcode",
    totalCost: "1000 EGP",
  },
];
