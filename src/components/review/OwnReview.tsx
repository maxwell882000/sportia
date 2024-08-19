import Comment from "./Comment.tsx";
import { useUnit } from "effector-react";
import { $ownReview } from "../../states/review/store.ts";
import { $user } from "../../states/users/store.ts";
import { $commentMade } from "../../states/review/events.ts";
import Button from "../button/Button.tsx";
import { LINK, TEXT } from "../../constants/share.ts";
import { Edit01, Share01 } from "@untitled-ui/icons-react";

function OwnReview() {
  const [ownReview, user, commentMade] = useUnit([
    $ownReview,
    $user,
    $commentMade,
  ]);
  return (
    ownReview && (
      <div className={"space-y-[1rem]"}>
        <div>
          <span className={"text text-white"}>Ваш отзыв</span>
        </div>
        <Comment
          user={{
            name: user.name,
            avatar: user.avatar,
            review: ownReview.review,
            comment: ownReview.comment,
            reviewDate: ownReview.reviewDate,
          }}
        />
        <div className={"flex space-x-[0.5rem]"}>
          <Button
            backgroundColor={"#ACEF03"}
            name={"Редакитировать"}
            className={"w-full text-[#15171C]"}
            onClick={() => {
              commentMade({ ...ownReview });
            }}
            icon={<Edit01 className={"icon-stroke-1"} />}
          />
          <Button
            backgroundColor={"#1C1F24"}
            className={"h-[2.5rem] w-[2.5rem] text-white"}
            onClick={() => {
              const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(LINK)}&text=${encodeURIComponent(TEXT)}`;
              window.open(shareUrl, "_blank", "noopener,noreferrer");
            }}
            name={<Share01 className={"icon-stroke-1"} />}
          />
        </div>
      </div>
    )
  );
}

export default OwnReview;
