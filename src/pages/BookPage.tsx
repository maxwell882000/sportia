import Book from "../components/book/Book.tsx";
import {HTMLAttributes} from "react";

function BookPage(props: HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={"order-4"}>
        <Book/>
    </div>
}

export default BookPage
