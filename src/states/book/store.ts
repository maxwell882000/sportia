import { bookDomain } from "./domain";
import { BookDto } from "../../dtos/book/bookDto.ts";
import {
  $bookAcceptChanged,
  $bookAcceptClose,
  $bookAccepted,
} from "./events.ts";
import { sample, Store, StoreWritable } from "effector";
import { $bookForm } from "./form.ts";

export const $bookAccept: StoreWritable<BookDto> = bookDomain
  .createStore<BookDto>(null)
  .on($bookAcceptChanged, (_, result) => result)
  .on($bookAcceptClose, () => null);

export const $isBookAcceptOpen: Store<boolean> = $bookAccept.map((b) => !!b);

sample({
  source: $bookForm.formValidated,
  target: $bookAcceptChanged,
});

$bookAcceptChanged.watch((e) => {
  console.log("$bookAcceptChanged", e);
});
sample({
  clock: $bookAccepted,
  source: $bookAccept,
  target: [$bookAcceptClose], // here write next logic,
});
