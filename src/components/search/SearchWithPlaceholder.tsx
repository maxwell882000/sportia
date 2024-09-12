import InputSearch from "../input/InputSearch.tsx";
import { useUnit } from "effector-react/effector-react.umd";
import { $searchPlaceholder } from "../../states/store.ts";

export const SearchWithPlaceholder = () => {
  const [searchPlaceholder] = useUnit([$searchPlaceholder]);
  return <InputSearch className={"w-full"} placeholder={searchPlaceholder} />;
};
