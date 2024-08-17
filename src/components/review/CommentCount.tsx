interface Props {
  commentCount: number;
}

function CommentCount({ commentCount }: Props) {
  return (
    <span
      className={
        "text-[0.875rem] leading-[1.035rem] text-white text-opacity-50"
      }
    >
      {commentCount} отзывов
    </span>
  );
}

export default CommentCount;
