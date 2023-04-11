export type RoomType = "SINGLE" | "DOUBLE";

export interface Room {
  id: string;
  room_name: string;
  floor_id: string;
  room_type: RoomType;
}
