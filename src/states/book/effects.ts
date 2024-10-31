import { bookDomain } from "./domain.ts";
import { BookingTypeService } from "../../infrastructure/axios/services/booking/bookingTypeService.ts";
import { GetBookingTypeByCategoryRequest } from "../../infrastructure/axios/services/booking/dtos/requests/getBookingTypeByCategoryRequest.ts";
import {
  $bookingTypeChanged,
  $isBookingCanceledPopUpChanged,
  $sameBookingCountChanged,
} from "./events.ts";
import { BookingService } from "../../infrastructure/axios/services/booking/bookingService.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { GetSameBookingsCountRequest } from "../../infrastructure/axios/services/booking/dtos/requests/getSameBookingsCountRequest.ts";
import { BookingUserOptionDto } from "../../infrastructure/axios/services/booking/dtos/bookingUserOptionDto.ts";
import { BookingCountDto } from "../../dtos/book/bookingCountDto.ts";
import { CreateBookingRequest } from "../../infrastructure/axios/services/booking/dtos/requests/creteBookingRequest.ts";
import { PaymentOption } from "../../infrastructure/axios/services/booking/dtos/paymentOption.ts";
import { successNotification } from "../../utils/notifications/successNotification.ts";
import { $pageChanged } from "../events.ts";
import { Pages } from "../../constants/pages.ts";
import { $isBookingCanceledPopUp } from "./store.ts";

export const $createBookingFx = bookDomain.createEffect(
  async ({ bookDto, eventId }: { bookDto: BookDto; eventId: string }) => {
    const response = await BookingService.createBooking({
      bookingOptions: bookDto.bookingOptions.map(
        (e) =>
          ({
            optionId: e.optionId,
            bookingOptionValue: { value: e.bookingOptionValue },
          }) as BookingUserOptionDto,
      ),
      payment: bookDto.isClick ? PaymentOption.isClick : PaymentOption.IsPayme,
      bookingTypeId: bookDto.bookingType.id as string,
      eventId,
    } as CreateBookingRequest);
    successNotification("Вы успешно забранировали !");
    $pageChanged(Pages.MAIN);
    window.open(response.paymentUrl, "_blank");
  },
);

export const $cancelBookingFx = bookDomain.createEffect(
  async (bookingId: string) => {
    await BookingService.cancelBooking({ bookingId });
    $isBookingCanceledPopUpChanged(true);
  },
);

export const $getSameBookingCountFx = bookDomain.createEffect(
  async ({ bookDto, eventId }: { bookDto: BookDto; eventId: string }) => {
    const sameBookingCount = await BookingService.getSameBookingCount({
      bookingOptions: bookDto.bookingOptions.map(
        (e) =>
          ({
            optionId: e.optionId,
            bookingOptionValue: { value: e.bookingOptionValue },
          }) as BookingUserOptionDto,
      ),
      bookingTypeId: bookDto.bookingType.id as string,
      eventId,
    } as GetSameBookingsCountRequest);
    $sameBookingCountChanged({ ...sameBookingCount } as BookingCountDto);
  },
);
export const $getBookingTypesByCategoryFx = bookDomain.createEffect(
  async ({ categoryId, eventId }) => {
    const bookingTypes = await BookingTypeService.getBookingType({
      categoryId,
      eventId,
    } as GetBookingTypeByCategoryRequest);
    $bookingTypeChanged([...bookingTypes]);
  },
);
