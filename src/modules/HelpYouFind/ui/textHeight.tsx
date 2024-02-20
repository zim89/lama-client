type TTextHeightProps = {
  title: any;
  right: string;
  top: string;
};

export default function TextHeight({ title, right, top }: TTextHeightProps) {
  return (
    <div className='relative h-0' style={{ top: top, right: right }}>
      <p className='text-lg font-medium text-gray-900'>{title}</p>
    </div>
  );
}
