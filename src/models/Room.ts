export interface Room {
  id: string;
  image: string;
  photos?: string[];
  number: string;
  dayCost: string;
  isReserved: boolean;
  numOfBeds: number;
  capacity: number;
  sales: {
    currentMonthInEGP: number;
    lastMonthInEGP: number;
  };
}
