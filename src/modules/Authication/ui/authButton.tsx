type TAuthButtonProps = {
  backgroundColor: any;
  textColor: string;
  title: string;
  onClick: any;
};
export default function AuthButton({
  onClick,
  title,
  backgroundColor,
  textColor,
}: TAuthButtonProps) {
  return (
    <button
      className='flex h-11 w-full items-center justify-center rounded-3xl text-sm font-medium'
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}>
      {title}
    </button>
  );
}
