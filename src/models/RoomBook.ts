type RelationToCustomer = "son" | "daughter" | "sister" | "brother";

type Pet = {
  name: string;
  age: number;
  relationToCustomer: RelationToCustomer;
};

export interface RoomBook {
  id: string;
  customerId: string;
  roomId: string;
  from: string;
  to: string;
  pets: Pet[];
  securityCode: string;
}
