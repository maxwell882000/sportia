import Book from "../components/book/Book.tsx";

interface Props {
  className?: string;
}

function BookPage({ className }: Props) {
  return (
    <>
      <div className={"mb-[1rem] h-[5rem]"}></div>
      <div className={"mt-[1rem]"}></div>
      <div
        className={`relative order-4 w-[24rem] flex-1 overflow-y-auto ${className} `}
      >
        <Book />
      </div>
    </>
  );
}

export default BookPage;
