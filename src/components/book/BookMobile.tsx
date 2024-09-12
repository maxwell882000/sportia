import Slides from "../slide/Slides.tsx";
import { useRef } from "react";
import { useUnit } from "effector-react";
import { $eventDetail } from "../../states/event/store.ts";
import ScrollDrawer from "../drawer/ScrollDrawer.tsx";
import { useElementSize } from "../../hooks/useElementSize.ts";
import { useWindowSize } from "../../hooks/useWindowSize.ts";
import { SearchWithPlaceholder } from "../search/SearchWithPlaceholder.tsx";
import BookChoice from "./BookChoice.tsx";
import BookForm from "./BookForm.tsx";
import { useForm } from "effector-forms";
import { $bookForm } from "../../states/book/form.ts";
import useScrollToFix from "../../hooks/useScrollToFix.ts";

function BookMobile() {
  const [event] = useUnit([$eventDetail]);
  const windowSize = useWindowSize();
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const slidesRef = useRef<HTMLDivElement>(null);
  const slidesSize = useElementSize(slidesRef);
  const drawerSize = `${windowSize.innerHeight - slidesSize.height * 0.75}px`;

  const { fields } = useForm($bookForm);
  const form = useScrollToFix<HTMLDivElement, HTMLDivElement>(scrollDivRef);
  return (
    <div className={"flex w-full flex-col"}>
      <div ref={slidesRef} className={"relative z-10 w-screen"}>
        <Slides images={event.images} />
      </div>
      <div className={"relative z-20"}>
        <ScrollDrawer
          ref={scrollDivRef}
          drawerSize={drawerSize}
          fixedClassName={`space-y-[1rem] ${form.isFixed && "shadow-custom"}`}
          fixedChildren={
            <>
              <SearchWithPlaceholder />
              <BookChoice
                bookingTypeOptionField={fields.bookingOptions}
                bookTypeField={fields.bookingType}
              />
            </>
          }
        >
          <div className={"mt-[1rem]"}></div>
          <div ref={form.elementRef} className={"space-y-[1rem]"}>
            <BookForm />
          </div>
        </ScrollDrawer>
      </div>
    </div>
  );
}

export default BookMobile;
