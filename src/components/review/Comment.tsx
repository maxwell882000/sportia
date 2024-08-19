import Avatar from "react-avatar";
import ReviewStar from "./ReviewStar.tsx";
import { UserReviewDto } from "../../dtos/review/userReviewDto.ts";

interface Props {
  user: UserReviewDto;
  onStarClick?: (review: number) => void;
}

function Comment({ user, onStarClick }: Props) {
  return (
    <>
      <div className={"space-y-[0.5rem]"}>
        <div className={"flex items-center space-x-[1rem] text-center"}>
          <Avatar
            round={true}
            size="2.5rem"
            facebook-id="invalidfacebookusername"
            name={user.name}
            src={user.avatar}
          />
          <div>
            <span className={"text-white"}>{user.name}</span>
            <ReviewStar
              startClass={"text-[#1C1F24]"}
              review={user.review}
              onClick={(review: number) => {
                onStarClick && onStarClick(review);
              }}
            />
          </div>
        </div>
        <div>
          <p className={"text-[0.875rem] leading-[1.035rem] text-white"}>
            {user.comment}
          </p>
        </div>
      </div>
    </>
  );
}

export default Comment;
