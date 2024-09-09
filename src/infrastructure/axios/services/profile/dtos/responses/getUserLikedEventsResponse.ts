import { DayOfWeek } from "../../../event/dtos/dayOfWeek.ts";
import { FileDto } from "../../../common/dtos/fileDto.ts";
import { LatLong } from "../../../common/dtos/latLong.ts";

export interface GetUserLikedEventsResponse {
  id: string;
  name: string;
  nextTime: string;
  workDay: DayOfWeek;
  isOpen: boolean;
  image: FileDto;
  address: string;
  coordinates: LatLong;
  mark: number;
  reviewCount: number;
  categoryId: string;
  isReservable: boolean;
}
