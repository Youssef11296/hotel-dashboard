import { RoomBook } from "../models/RoomBook";

export const roombooks: RoomBook[] = [
  {
    id: "#111",
    customerId: "111",
    roomId: "111",
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [],
    securityCode: "testcode",
  },
  {
    id: "#222",
    customerId: "222",
    roomId: "333",
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        name: "Maram",
        age: 22,
        relationToCustomer: "daughter",
      },
    ],
    securityCode: "testcode",
  },
];
