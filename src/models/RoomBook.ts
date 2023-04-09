import { Customer } from "./User";
import { Room } from "./Room";

type RelationToCustomer = "son" | "daughter" | "sister" | "brother";

type Individual = {
  name: string;
  age: number;
  relationToCustomer: RelationToCustomer;
};

export interface RoomBook {
  id: string;
  number: string;
  customer: Customer;
  participants?: Individual[];
  roomNumber: Room["number"];
  from: string;
  to: string;
  pets?: Individual[];
  securityCode: string;
  totalCost: string;
}
