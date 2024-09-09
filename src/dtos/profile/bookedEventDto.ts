import { BookTypeDto } from "../book/bookTypeDto.ts";

export interface BookedEventDto {
  id: string;
  name: string;
  type: string;
  options: string;
  cost: number;
}
