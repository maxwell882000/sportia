interface Props {
  color: string;
  text: string;
}

function BookedStatus({ color, text }: Props) {
  return (
    <div className={"flex flex-row pb-[1rem]"}>
      <div
        style={{
          backgroundColor: color,
        }}
        className={
          "h-[1.5rem] rounded-[0.5rem] px-[1rem] text-center text-[0.875rem] font-bold leading-[1.5rem] text-white"
        }
      >
        {text}
      </div>
    </div>
  );
}

export default BookedStatus;
