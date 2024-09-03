import { bookDomain } from "./domain.ts";
import { BookingTypeService } from "../../infrastructure/axios/services/booking/bookingTypeService.ts";
import { GetBookingTypeByCategoryRequest } from "../../infrastructure/axios/services/booking/dtos/requests/getBookingTypeByCategoryRequest.ts";
import { $bookingTypeChanged, $sameBookingCountChanged } from "./events.ts";
import { sample } from "effector";
import { $activeCategory } from "../category/store.ts";
import { BookingService } from "../../infrastructure/axios/services/booking/bookingService.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { GetSameBookingsCountRequest } from "../../infrastructure/axios/services/booking/dtos/requests/getSameBookingsCountRequest.ts";
import { BookingUserOptionDto } from "../../infrastructure/axios/services/booking/dtos/bookingUserOptionDto.ts";

export const createBookingFx = bookDomain.createEffect(() => {});

export const getSameBookingCountFx = bookDomain.createEffect(
  async ({ bookDto, eventId }: { bookDto: BookDto; eventId: string }) => {
    const sameBookingCount = await BookingService.getSameBookingCount({
      bookingOptions: bookDto.bookingOptions.map(
        (e) =>
          ({
            optionId: e.optionId,
            bookingOptionValue: { value: e.bookingOptionValue },
          }) as BookingUserOptionDto,
      ),
      bookingTypeId: bookDto.bookingTypeId as string,
      eventId,
    } as GetSameBookingsCountRequest);
    $sameBookingCountChanged(sameBookingCount.count);
  },
);
export const getBookingTypesByCategoryFx = bookDomain.createEffect(
  async (categoryId: string) => {
    const bookingTypes = await BookingTypeService.getBookingType({
      categoryId,
    } as GetBookingTypeByCategoryRequest);
    $bookingTypeChanged(bookingTypes);
  },
);

sample({
  source: $activeCategory,
  fn: (category) => category.id,
  target: getBookingTypesByCategoryFx,
});
