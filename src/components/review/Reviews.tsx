import { useUnit } from "effector-react";
import { $review, $userReviews } from "../../states/review/store.ts";
import Comment from "./Comment.tsx";

function Reviews() {
  const [review, userReviews] = useUnit([$review, $userReviews]);
  return (
    <div className={"space-y-[2rem]"}>
      <div>
        <span className={"text text-white"}>{review?.reviewCount} отзывов</span>
      </div>
      {userReviews.map((user, index) => (
        <Comment key={`reviews-${index}`} user={user} />
      ))}
    </div>
  );
}

export default Reviews;
