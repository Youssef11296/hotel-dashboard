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
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "COMPLETED",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "111",
    number: "#202",
    customer: users[1],
    roomNumber: rooms[0].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "ACCEPTED",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "333",
    number: "#203",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "REJECTED",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "444",
    number: "#201",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "PENDING",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "555",
    number: "#204",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "PENDING",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "666",
    number: "#205",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "PENDING",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "777",
    number: "#261",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "PENDING",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "888",
    number: "#291",
    customer: users[2],
    roomNumber: rooms[1].number,
    from: "Mon 20 April 2022",
    to: "Wed 22 April 2022",
    pets: [
      {
        id: "1234",
        name: "Maram",
        age: 2,
      },
    ],
    participants: [],
    customerEmail: users[3].email,
    totalCost: "$1000",
    status: "COMPLETED",
    customerFeedback:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
];
