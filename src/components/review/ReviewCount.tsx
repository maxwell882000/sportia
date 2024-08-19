interface Props {
  reviewCount: number;
}

function ReviewCount({ reviewCount }: Props) {
  return (
    <span
      className={
        "text-[0.875rem] leading-[1.035rem] text-white text-opacity-50"
      }
    >
      {reviewCount} отзывов
    </span>
  );
}

export default ReviewCount;
