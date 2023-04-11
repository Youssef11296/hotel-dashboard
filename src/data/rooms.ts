import { faker } from "@faker-js/faker";
import { Room } from "../models/Room";

export const rooms: Room[] = [
  {
    id: faker.datatype.uuid(),
    room_name: "Room-1",
    floor_id: faker.datatype.uuid(),
    room_type: "DOUBLE",
  },
  {
    id: faker.datatype.uuid(),
    room_name: "Room-2",
    floor_id: faker.datatype.uuid(),
    room_type: "SINGLE",
  },
  {
    id: faker.datatype.uuid(),
    room_name: "Room-3",
    floor_id: faker.datatype.uuid(),
    room_type: "SINGLE",
  },
  {
    id: faker.datatype.uuid(),
    room_name: "Room-4",
    floor_id: faker.datatype.uuid(),
    room_type: "DOUBLE",
  },
  {
    id: faker.datatype.uuid(),
    room_name: "Room-10",
    floor_id: faker.datatype.uuid(),
    room_type: "SINGLE",
  },
  {
    id: faker.datatype.uuid(),
    room_name: "Room-8",
    floor_id: faker.datatype.uuid(),
    room_type: "DOUBLE",
  },
];
