import Star from "../Icons/Star.tsx";

interface Props {
  review: number;
  startClass?: string;
  onClick?: (review: number) => void;
}

function ReviewStar({ review, startClass, onClick }: Props) {
  return (
    <div className={"flex"}>
      {Array.from({ length: 5 }).map((_, index) => {
        const progress = Math.max(0, Math.min(review - index, 1));
        return (
          <button
            key={`star-${index}`}
            className={"cursor-default"}
            onClick={() => onClick && onClick(index + 1)}
          >
            <Star className={startClass} progress={progress} />
          </button>
        );
      })}
    </div>
  );
}

export default ReviewStar;
