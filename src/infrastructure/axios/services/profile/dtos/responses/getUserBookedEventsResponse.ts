import { BookingStatus } from "../../../../../../dtos/profile/bookingStatus.ts";
import { BookingGroupStatus } from "../../../../../../dtos/profile/bookingGroupStatus.ts";

export interface GetUserBookedEventsResponse {
  id: string;
  name: string;
  type: string;
  options: string;
  cost: number;
  status: BookingStatus;
  groupStatus: BookingGroupStatus;
  paymentUrl?: string;
}
