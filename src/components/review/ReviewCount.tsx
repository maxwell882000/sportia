interface Props {
  reviewCount: number;
}

function ReviewCount({ reviewCount }: Props) {
  return (
    <span
      className={
        "text-[0.75rem] leading-[0.875rem] text-white text-opacity-50 md:text-[0.875rem] md:leading-[1rem]"
      }
    >
      {reviewCount} отзывов
    </span>
  );
}

export default ReviewCount;
