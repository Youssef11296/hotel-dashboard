import { Room } from "../models/Room";

export const rooms: Room[] = [
  {
    id: "111",
    dayCost: "200 EGP",
    isReserved: true,
    numOfBeds: 3,
    capacity: 3,
  },
  {
    id: "222",
    dayCost: "500 EGP",
    isReserved: false,
    numOfBeds: 2,
    capacity: 2,
  },
  {
    id: "300",
    dayCost: "300 EGP",
    isReserved: true,
    numOfBeds: 1,
    capacity: 1,
  },
];
