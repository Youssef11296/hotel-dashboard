export interface Room {
  id: string;
  image: string;
  photos?: string[];
  number: string;
  dayCost: string;
  isReserved: boolean;
  currentTotalResidents: number;
  numOfBeds: number;
  capacity: number;
  floor: {
    floorNumber: number;
    floorId: string;
  };
  sales: {
    currentMonthInEGP: number;
    lastMonthInEGP: number;
  };
}
