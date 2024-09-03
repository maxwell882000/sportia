import { FileDto } from "../../../common/dtos/fileDto.ts";
import { DayOfWeek } from "../dayOfWeek.ts";
import { LatLong } from "../latLong.ts";
import { WorkHour } from "../workHour.ts";

export interface GetEventDetailResponse {
  id: string; // UUID string
  name: string;
  nextTime: string;
  workDay: DayOfWeek;
  isOpen: boolean;
  image: FileDto;
  address: string;
  coordinates: LatLong;
  mark: number;
  reviewCount: number;
  categoryId: string; // UUID string
  isLiked: boolean;
  isReservable: boolean;
  images: FileDto[];
  workHours: WorkHour[];
}
