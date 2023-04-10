import { User } from "./User";
import { Room } from "./Room";
import { BOOKING_STATUS } from "../constants";

type RelationToCustomer = "son" | "daughter" | "sister" | "brother";

type Individual = {
  id: string;
  name: string;
  age: number;
  relationToCustomer: RelationToCustomer;
};

type Status = "ACCEPTED" | "REJECTED" | "PENDING";

export interface RoomBook {
  id: string;
  number: string;
  customer: User;
  participants?: Individual[];
  roomNumber: Room["number"];
  from: string;
  to: string;
  pets?: Individual[];
  securityCode: string;
  totalCost: string;
  status: Status;
}
