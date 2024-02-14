type TTextProps = {
  title: string;
};

const Title: React.FC<TTextProps> = ({ title }) => {
  return (
    <div className='flex flex-row justify-between'>
      <h1 className='font-medium xs:text-2xl	sm:text-[28px] md:text-[32px] lg:text-4xl'>
        {title}
      </h1>
    </div>
  );
};
export default Title;
