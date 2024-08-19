import { BookTypeDto } from "../book/bookTypeDto.ts";
import { SelectItem } from "../../components/selector/Selector.tsx";

export interface BookedEventDto {
  id: number;
  bookType: BookTypeDto;
  days?: string;
  date?: string;
  time: string;
  cost: number;
  name: string;
}
