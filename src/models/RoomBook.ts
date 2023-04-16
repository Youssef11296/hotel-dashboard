import { User } from "./User";
import { Room } from "./Room";
import { BOOKING_STATUS } from "../constants";

type RelationToCustomer = "son" | "daughter" | "sister" | "brother" | "friend";

interface Individual {
  id: string;
  name: string;
  age: number;
  relationToCustomer?: RelationToCustomer;
}

type Status = "ACCEPTED" | "REJECTED" | "PENDING" | "COMPLETED";

export interface RoomBook {
  id: string;
  number: string;
  customer: User;
  participants?: Individual[];
  roomNumber: Room["number"];
  from: string | number;
  to: string | number;
  pets?: Individual[];
  customerEmail: string;
  totalCost: string;
  status: Status;
  customerFeedback?: string;
}
