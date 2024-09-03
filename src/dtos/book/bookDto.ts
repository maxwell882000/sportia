import { BookTypeDto } from "./bookTypeDto.ts";
import { SelectItem } from "../../components/selector/Selector.tsx";
import { BookingUserOptionDto } from "./bookingUserOptionDto.ts";

export interface BookDto {
  bookingTypeId: string;
  bookType: BookTypeDto;
  bookingOptions: BookingUserOptionDto[];
  cost: number;
  isClick: boolean;
  isPayme: boolean;
}
