import ReviewStar from "./ReviewStar.tsx";
import ReviewCount from "./ReviewCount.tsx";
import { useUnit } from "effector-react";
import { $isCommenting, $review } from "../../states/review/store.ts";
import { $commentMade } from "../../states/review/events.ts";
import { useForm } from "effector-forms";
import { $ownReviewForm } from "../../states/review/form.ts";
import TextArea from "../input/TextArea.tsx";
import Button from "../button/Button.tsx";
import OwnReview from "./OwnReview.tsx";

function OverallReview() {
  const [review, commentMade, isCommenting] = useUnit([
    $review,
    $commentMade,
    $isCommenting,
  ]);
  const { fields, submit } = useForm($ownReviewForm);
  return (
    <>
      <div className={"space-y-[1rem]"}>
        <div className={"flex flex-col rounded-app bg-[#1C1F24] px-4 py-2.5"}>
          <div className={"flex items-center justify-start space-x-4 pb-2"}>
            <div className={"h-[3.563rem]"}>
              <span
                className={
                  "text-[3rem] leading-[2.869rem] tracking-[0.009rem] text-white text-opacity-80"
                }
              >
                {review?.mark?.toFixed(1) ?? 0.0}
              </span>
            </div>
            <div>
              <ReviewStar review={review?.mark} />
              <ReviewCount reviewCount={review?.reviewCount} />
            </div>
          </div>
          {(review?.ownReview == null || isCommenting) && (
            <div
              className={
                "mt-2 flex flex-col items-center justify-center border-t border-[#15171C] py-2"
              }
            >
              <span className={"text-[0.875rem] text-white text-opacity-50"}>
                Оцените и оставьте отзыв
              </span>
              <div>
                <ReviewStar
                  onClick={(r: number) => {
                    if (!isCommenting)
                      commentMade({ ...review?.ownReview, mark: r });
                    else fields.mark.onChange(r);
                  }}
                  startClass={"!w-[2.5rem] !h-[2.5rem] cursor-pointer"}
                  review={isCommenting ? fields.mark.value : 0}
                />
              </div>
            </div>
          )}
        </div>
        {isCommenting && (
          <>
            <div>
              <TextArea
                placeholder={"Оставьте комментарий"}
                options={{
                  field: fields.comment,
                }}
              />
            </div>
            <Button
              backgroundColor={"#ACEF03"}
              name={"Сохранить"}
              className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
              onClick={() => {
                submit();
              }}
            />
          </>
        )}
      </div>
      {!isCommenting && <OwnReview />}
    </>
  );
}

export default OverallReview;
