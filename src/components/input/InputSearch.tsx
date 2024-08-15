import InputPrefix from "./InputPrefix.tsx";
import {SearchMd} from "@untitled-ui/icons-react";

function InputSearch(props) {
    return <InputPrefix inputProps={props} prefix={<SearchMd className={"text-[#ACEF03]"}/>}></InputPrefix>
}

export default InputSearch
