import Avatar from "react-avatar";
import ReviewStar from "./ReviewStar.tsx";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";

interface Props {
  event: EventDetailDto;
}

function Reviews({ event }: Props) {
  return (
    <div className={"space-y-[2rem]"}>
      <div>
        <span className={"text text-white"}>{event.commentCount} отзывов</span>
      </div>
      {event.userReviews.map((user, index) => (
        <div key={`reviews-${index}`} className={"space-y-[0.5rem]"}>
          <div className={"flex items-center space-x-[1rem] text-center"}>
            <Avatar
              round={true}
              size="2.5rem"
              facebook-id="invalidfacebookusername"
              src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
            />
            <div>
              <span className={"text-white"}>{user.name}</span>
              <ReviewStar review={user.review} />
            </div>
          </div>
          <div>
            <p className={"text-[0.875rem] leading-[1.035rem] text-white"}>
              {user.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
