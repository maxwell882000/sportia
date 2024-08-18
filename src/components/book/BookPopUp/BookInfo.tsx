interface Props {
  label: string;
  value: string;
}

function BookInfo({ label, value }: Props) {
  return (
    <p className={"text-[1rem] text-[#ACEF03]"}>
      {label}: <span className={"text-[#FFFFFFCC]"}>{value}</span>
    </p>
  );
}

export default BookInfo;
