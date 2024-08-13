import Input from "./Input.tsx";
import {SearchMd} from "@untitled-ui/icons-react";

function InputSearch(props) {
    return <Input inputProps={props} prefix={<SearchMd className={"text-[#ACEF03]"}/>}></Input>
}

export default InputSearch
