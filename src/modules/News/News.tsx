import Uniforms from '@/assets/images/news/Children.jpg';
import Glasses from '@/assets/images/news/Glasses.png';
import Pajamas from '@/assets/images/news/t-shirts.png';
import NewProductCard from '@/components/NewProductCard';
import Title from '@/components/Title';

export default function News() {
  return (
    <div className='section grid xs:m-[0_auto] xs:max-w-[375px] xs:px-4 sm:max-w-[480px] sm:px-5 md:max-w-[768px] lg:max-w-[1024px]  lg:px-8 xl:xs:max-w-[1440px] xl:px-[7.5rem]'>
      <Title title={'Цікаві новинки'} titleLink={'Дивитись все'} />
      <div className='grid gap-5 xl:gap-6'>
        <div className='row-span-1 xs:h-[13.75rem] sm:h-[15.63rem] md:row-start-1 md:row-end-1 md:h-[15.75rem] lg:h-[17.1rem]'>
          <NewProductCard title={'Cонцезахисні окуляри'} src={Glasses} />
        </div>
        <div className='xs:h-[13.75rem] sm:h-[15.63rem] md:h-[15.75rem] lg:h-[17.1rem]'>
          <NewProductCard title={'Піжами'} src={Pajamas} />
        </div>
        <div className='xs:h-[13.75rem] sm:h-[15.63rem] md:row-start-1 md:row-end-3 md:h-[32.75rem] lg:h-[35.38rem] xl:h-[35.63rem]'>
          <NewProductCard
            title={'Шкільна форма'}
            src={Uniforms}
            imgPosition='center top'
            imgSIze='cover'
          />
        </div>
      </div>
    </div>
  );
}
