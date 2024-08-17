import Book from "../components/book/Book.tsx";


interface Props {
    className?: string
}


function BookPage({className}: Props) {
    return (
        <>
            <div className={"h-[5rem] mb-[1rem]"}>

            </div>
            <div className={"mt-[1rem]"}>

            </div>
            <div
                className={`overflow-y-auto  order-4 relative flex-1 w-[24rem]  ${className} `}>
                <Book/>
            </div>
        </>

    )
}

export default BookPage
