type TGenderButtonProps = {
  backgroundColor: any;
  textColor: string;
  text: string;
  onClick: any;
  width?: string;
};

export default function GenderButton({
  backgroundColor,
  textColor,
  text,
  onClick,
  width,
}: TGenderButtonProps) {
  return (
    <button
      className='w-[5.7rem] cursor-pointer  rounded-full py-3.5 text-center text-xs font-medium sm:w-[7.3rem] md:w-[5.8rem] md:py-3 md:text-sm lg:w-[7.13rem] xl:w-[9.6rem]'
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
      }}>
      {text}
    </button>
  );
}
