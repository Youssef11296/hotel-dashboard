export interface RoomBook {
  id: string;
  user_id: string;
  room_id: string;
  booking_date: string;
  booking_time_from: string;
  booking_time_to: string;
  is_approved: boolean;
  extra_information: string;
}
