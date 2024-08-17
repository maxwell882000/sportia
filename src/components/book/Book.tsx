import { useState } from "react";
import BookChoice from "./BookChoice.tsx";
import BookSingle from "./BookSingle.tsx";

function Book() {
  const [isSingle, setSingle] = useState<boolean>(true);
  return (
    <div className={"space-y-[1.5rem] px-[1.5rem] pb-[1rem]"}>
      <BookChoice isSingle={isSingle} setSingle={setSingle} />
      <BookSingle />
    </div>
  );
}

export default Book;
