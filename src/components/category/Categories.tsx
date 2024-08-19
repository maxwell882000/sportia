import { useUnit } from "effector-react";
import {
  $categories,
  $categoryActivated,
} from "../../states/category/store.ts";
import SlideButton from "../slide/SlideButton.tsx";

function Categories() {
  const [categories, categoriesActivated] = useUnit([
    $categories,
    $categoryActivated,
  ]);
  return (
    <SlideButton
      items={categories}
      onClick={(item) => categoriesActivated(item)}
    />
  );
}

export default Categories;
