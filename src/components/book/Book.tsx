import BookChoice from "./BookChoice.tsx";
import BookSingle from "./BookSingle/BookSingle.tsx";
import BookTeam from "./BookTeam/BookTeam.tsx";
import { useForm } from "effector-forms";
import { $bookForm } from "../../states/book/form.ts";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import Button from "../button/Button.tsx";
import Football from "../Icons/Football.tsx";
import BookPayment from "./BookPayment.tsx";
import { $paymentRequired } from "../../states/book/events.ts";
import { useUnit } from "effector-react";
import BookPopUp from "./BookPopUp/BookPopUp.tsx";
import { $bookingType, $sameBookingCount } from "../../states/book/store.ts";
import { BookingOptionType } from "../../infrastructure/axios/services/booking/dtos/bookingOptionType.ts";
import { Selector } from "../selector/Selector.tsx";
import Input from "../input/Input.tsx";
import BookLabel from "./BookLabel.tsx";
import RoundMan from "../Icons/RoundMan.tsx";
import { BookingUserOptionDto } from "../../dtos/book/bookingUserOptionDto.ts";
import { errorNotification } from "../../utils/notifications/errorNotification.ts";

function Book() {
  const { fields, submit, values } = useForm($bookForm);
  const [paymentRequired, sameBookingCount] = useUnit([
    $paymentRequired,
    $sameBookingCount,
  ]);

  function changeOptions(optionId: string, value: string) {
    let result = fields.bookingOptions.value.map((f) =>
      f.optionId === optionId ? { ...f, bookingOptionValue: value } : f,
    );
    var isPropertyExist = fields.bookingOptions.value.find(
      (e) => e.optionId === optionId,
    );
    if (!isPropertyExist) {
      result.push({
        optionId,
        bookingOptionValue: value,
      } as BookingUserOptionDto);
    }
    fields.bookingOptions.onChange(result);

    console.log("changeOptions", values, result);
  }

  return (
    <div className={"space-y-[1rem] px-[1.5rem] pb-[1rem]"}>
      <BookChoice
        bookingTypeOptionField={fields.bookingOptions}
        bookTypeField={fields.bookingType}
      />
      {fields.bookingType?.value?.bookingOptions?.map((e) =>
        e.type === BookingOptionType.DropDown ? (
          <Selector
            key={`select-${e.type}-${e.id}`}
            options={e.bookingOptionValues.map((e) => ({
              label: e.value,
              value: e.value,
            }))}
            onClick={(value) => {
              if (value) changeOptions(e.id, value?.value);
            }}
            required={true}
            placeholder={e.label}
          />
        ) : e.type === BookingOptionType.Text ? (
          <Input
            key={`select-${e.type}-${e.id}`}
            options={{
              onChange: (value) => {
                changeOptions(e.id, value);
              },
            }}
            required
            placeholder={e.label}
          />
        ) : (
          <Input
            key={`select-${e.type}-${e.id}`}
            options={{
              onChange: (value) => {
                changeOptions(e.id, value);
              },
            }}
            type={"date"}
            required
            placeholder={"Выберите день"}
          />
        ),
      )}
      {fields.bookingType?.value?.isShowLimit &&
      sameBookingCount?.totalCount ? (
        <BookLabel
          label={`${sameBookingCount.count}/${sameBookingCount.totalCount} мест свободно`}
        >
          <div className={"flex"}>
            {Array.from({ length: sameBookingCount.totalCount }).map(
              (_, index) => (
                <RoundMan
                  key={`rounded-man-${index}`}
                  className={`h-[2rem] w-[2rem] ${index + 1 > sameBookingCount.count ? "text-[#FFFFFF1F]" : "text-[#ACEF03]"} `}
                />
              ),
            )}
          </div>
        </BookLabel>
      ) : (
        ""
      )}
      <BookPayment
        isClick={fields.isClick}
        isPayme={fields.isPayme}
        cost={fields?.bookingType?.value?.cost}
      />
      <div>
        <Button
          backgroundColor={"#ACEF03"}
          name={"Забронировать"}
          className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
          onClick={() => {
            if (
              fields.bookingType.value.bookingOptions.length !==
              fields.bookingOptions.value.length
            ) {
              errorNotification("Пожалуйста заполните все поля !!!");
            }
            if (
              fields.isClick.value === false &&
              fields.isPayme.value === false
            ) {
              paymentRequired();
            } else {
              submit();
            }
          }}
          icon={<Football />}
        />
        <p className={"text-[0.75rem] leading-[1rem] text-[#FFFFFF80]"}>
          Нажимая на кнопку, я соглашаюсь с{" "}
          <span className={"text-[0.75rem] text-[#ACEF03]"}>
            условиями бронирования
          </span>
        </p>
      </div>
      <BookPopUp />;
    </div>
  );
}

export default Book;
