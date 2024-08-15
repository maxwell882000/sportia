import InputPrefix from "./InputPrefix.tsx";
import {ArrowLeft, SearchMd, X} from "@untitled-ui/icons-react";
import {useUnit} from "effector-react";
import {$currentPage} from "../../states/store.ts";
import {Pages} from "../../constants/pages.ts";

function InputSearch(props) {
    const [currentPage] = useUnit([$currentPage]);
    return <InputPrefix
        inputProps={props}
        prefix={
            currentPage === Pages.MAIN ? <SearchMd className={"text-[#ACEF03]"}/>
                : <button className={"text-white text-opacity-50 "}><ArrowLeft
                    className={"text-[#ACEF03] "}/></button>}
        suffix={currentPage === Pages.BOOK &&
            <button className={"text-white text-opacity-50 "}><X/></button>}
    >
    </InputPrefix>
}

export default InputSearch
