import { BookTypeDto } from "../book/bookTypeDto.ts";
import { SelectItem } from "../../components/selector/Selector.tsx";

interface BookedEventDto {
  id: number;
  bookType: BookTypeDto;
  days?: SelectItem;
  date?: string;
  time: SelectItem;
  cost: number;
  name: string;
}
