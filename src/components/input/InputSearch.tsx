import InputPrefix from "./InputPrefix.tsx";
import { ArrowLeft, SearchSm, X } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $currentPage, $search } from "../../states/store.ts";
import { Pages } from "../../constants/pages.ts";
import { InputHTMLAttributes } from "react";
import {
  $pageChanged,
  $pageRestored,
  $searchChanged,
} from "../../states/events.ts";
import { useWindowSize } from "../../hooks/useWindowSize.ts";

function InputSearch(props: InputHTMLAttributes<HTMLInputElement>) {
  const [currentPage, search, searchChanged, pageChanged, pageRestored] =
    useUnit([
      $currentPage,
      $search,
      $searchChanged,
      $pageChanged,
      $pageRestored,
    ]);
  const widthSize = useWindowSize();
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
        currentPage === Pages.MAIN ||
        (widthSize.innerWidth >= 768 && currentPage === Pages.DETAIL) ? (
          <SearchSm
            className={
              "h-[1.25rem] w-[1.25rem] text-[#ACEF03] md:h-[1.5rem] md:w-[1.5rem]"
            }
          />
        ) : (
          <button
            onClick={() => {
              if (currentPage === Pages.PROFILE || currentPage === Pages.BOOK)
                pageChanged(Pages.MAIN);
              else pageRestored();
            }}
            className={"text-white text-opacity-50"}
          >
            <ArrowLeft
              className={
                "h-[1.25rem] w-[1.25rem] text-[#ACEF03] md:h-[1.5rem] md:w-[1.5rem]"
              }
            />
          </button>
        )
      }
      suffix={
        currentPage !== Pages.MAIN &&
        !(widthSize.innerWidth >= 768 && currentPage === Pages.DETAIL) && (
          <button
            onClick={() => {
              pageChanged(Pages.MAIN);
            }}
            className={
              "h-[1.25rem] w-[1.25rem] text-white text-opacity-50 md:h-[1.5rem] md:w-[1.5rem]"
            }
          >
            <X
              className={"h-[1.25rem] w-[1.25rem] md:h-[1.5rem] md:w-[1.5rem]"}
            />
          </button>
        )
      }
    ></InputPrefix>
  );
}

export default InputSearch;
