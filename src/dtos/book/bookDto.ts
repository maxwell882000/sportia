import { BookTypeDto } from "./bookTypeDto.ts";
import { SelectItem } from "../../components/selector/Selector.tsx";

export interface BookDto {
  bookType: BookTypeDto;
  days?: SelectItem;
  date?: string;
  time: SelectItem;
  cost: number;
  isClick: boolean;
  isPayme: boolean;
}
