import InputPrefix from "./InputPrefix.tsx";
import { ArrowLeft, SearchSm, X } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $currentPage, $search } from "../../states/store.ts";
import { Pages } from "../../constants/pages.ts";
import { InputHTMLAttributes } from "react";
import { $pageChanged, $searchChanged } from "../../states/events.ts";

function InputSearch(props: InputHTMLAttributes<HTMLInputElement>) {
  const [currentPage, search, searchChanged, pageChanged] = useUnit([
    $currentPage,
    $search,
    $searchChanged,
    $pageChanged,
  ]);
  return (
    <InputPrefix
      inputProps={{
        ...props,
        value: search,
        onChange: (event) => {
          searchChanged(event.target.value);
        },
      }}
      prefix={
        currentPage === Pages.MAIN ? (
          <SearchSm className={"h-[1.5rem] w-[1.5rem] text-[#ACEF03]"} />
        ) : (
          <button
            onClick={() => {
              pageChanged(Pages.MAIN);
            }}
            className={"text-white text-opacity-50"}
          >
            <ArrowLeft className={"h-[1.5rem] w-[1.5rem] text-[#ACEF03]"} />
          </button>
        )
      }
      suffix={
        currentPage === Pages.BOOK && (
          <button
            onClick={() => {
              pageChanged(Pages.MAIN);
            }}
            className={"h-[1.5rem] w-[1.5rem] text-white text-opacity-50"}
          >
            <X className={"h-[1.5rem] w-[1.5rem]"} />
          </button>
        )
      }
    ></InputPrefix>
  );
}

export default InputSearch;
