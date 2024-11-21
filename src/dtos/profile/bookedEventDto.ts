import { BookingStatus } from "./bookingStatus.ts";
import { BookingGroupStatus } from "./bookingGroupStatus.ts";

export interface BookedEventDto {
  id: string;
  name: string;
  type: string;
  options: string;
  cost: number;
  status: BookingStatus;
  groupStatus: BookingGroupStatus;
  paymentUrl?: string;
}
