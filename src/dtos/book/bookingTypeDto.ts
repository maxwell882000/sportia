import { BookingOptionDto } from "../../infrastructure/axios/services/booking/dtos/bookingOptionDto.ts";
import { FileDto } from "../../infrastructure/axios/services/common/dtos/fileDto.ts";

export interface BookingTypeDto {
  id: string;
  label: string;
  categoryId: string;
  icon: FileDto;
  isShowLimit: boolean;
  cost: number;
  bookingOptions: BookingOptionDto[];
}
