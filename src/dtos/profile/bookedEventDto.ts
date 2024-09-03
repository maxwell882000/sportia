import { BookTypeDto } from "../book/bookTypeDto.ts";

export interface BookedEventDto {
  id: number;
  bookType: BookTypeDto;
  days?: string;
  date?: string;
  time: string;
  cost: number;
  name: string;
}
