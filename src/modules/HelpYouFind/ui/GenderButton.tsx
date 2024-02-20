type TGenderButtonProps = {
  backgroundColor: any;
  textColor: string;
  text: string;
  onClick: any;
};

export default function GenderButton({
  backgroundColor,
  textColor,
  text,
  onClick,
}: TGenderButtonProps) {
  return (
    <button
      className='cursor-pointer rounded-full px-[2.63rem] py-3 text-center text-sm font-medium'
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}>
      {text}
    </button>
  );
}
