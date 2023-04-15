import { Floor } from "./Floor";

export type RoomType = "BED_ROOM" | "MEETING_ROOM";
export type PetsAvailability = "PERMITTED" | "NOT_PERMITTED";

export interface Room {
  id: string;
  image: string;
  photos?: string[];
  number: string;
  type: RoomType;
  petsAvailability: PetsAvailability;
  dayCost: string;
  isReserved: boolean;
  isEmpty?: boolean;
  currentTotalResidents: number;
  numOfBeds: number;
  capacity: number;
  floor: {
    floorNumber: Floor["number"];
    floorId: Floor["floorId"];
  };
  sales: {
    currentMonthInEGP: number;
    lastMonthInEGP: number;
  };
}
