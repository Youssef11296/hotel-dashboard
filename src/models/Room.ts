import { Floor } from "./Floor";

export type RoomType = "BED_ROOM" | "MEETING_ROOM";

export interface Room {
  id: string;
  image: string;
  photos?: string[];
  number: string;
  type: RoomType;
  petsAvailability: boolean;
  dayCost: string;
  isReserved: boolean;
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
