export interface Floor {
  id: string;
  floorId: string;
  number: number | string;
  totalRooms: number;
  isComplete: boolean;
  isEmpty?: boolean;
}
