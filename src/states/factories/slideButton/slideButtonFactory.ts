import { SlideButtonDto } from "../../../dtos/slide/slideButtonDto.ts";
import { Domain, Store, StoreWritable } from "effector";
import { defaultCategories } from "../../../dtos/categories/categoryDto.ts";

export function slideButtonFactory<T extends SlideButtonDto>(
  domain: Domain,
  defaultValue?: T[],
) {
  const $slidesChanged = domain.createEvent<T[]>();
  const $slideActivated = domain.createEvent<T>();
  const $slides: StoreWritable<T[]> = domain
    .createStore<T[]>(defaultValue)
    .on($slidesChanged, (_, result) => {
      return result;
    })
    .on($slideActivated, (state, clicked) => {
      state.forEach((cat) => (cat.isActive = false));
      clicked.isActive = true;
      return [...state];
    });

  const $activeSlide: Store<T> = $slides.map<T>((e) => e.filter((c) => c.isActive)[0]);
  return {
    $slidesChanged,
    $slideActivated,
    $slides,
    $activeSlide,
  };
}
