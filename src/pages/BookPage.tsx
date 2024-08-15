import Book from "../components/book/Book.tsx";


interface Props {
    className?: string
}


function BookPage({className}: Props) {
    return (
        <>
            <div className={"h-[6rem]"}>

            </div>
            <div
                className={`order-4 relative flex-1 w-[24rem]  ${className} `}>
                <Book/>
            </div>
        </>

    )
}

export default BookPage
