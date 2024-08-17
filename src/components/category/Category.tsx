import { CategoryDto } from "../../dtos/categories/categoryDto.ts";
import { useUnit } from "effector-react";
import { $categoryActivated } from "../../states/category/events.ts";
import { hexToRgba } from "../../utils/hexToRgba.ts";
import Button from "../button/Button.tsx";

interface Props {
  category: CategoryDto;
}

function Category({ category }: Props) {
  const [categoryActivated] = useUnit([$categoryActivated]);
  return (
    <Button
      backgroundColor={hexToRgba(category.bgColor, Number(category.isActive))}
      className={"text-white"}
      onClick={() => categoryActivated(category)}
      icon={category.icon}
      name={category.name}
    />
  );
}

export default Category;
