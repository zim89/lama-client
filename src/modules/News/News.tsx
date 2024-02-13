import NewProductCard from '@/components/NewProductCard';
import Title from '@/modules/News/ui/Title';
import Uniforms from '../../assets/images/news/Children.jpg';
import Glasses from '../../assets/images/news/Glasses.png';
import Pajamas from '../../assets/images/news/t-shirts.png';

export default function News() {
  return (
    <div className='grid xs:m-[0_auto] xs:max-w-[375px] xs:px-4 xs:pt-10 sm:max-w-[480px] sm:px-5 sm:pt-[2.75rem] md:max-w-[768px] md:pt-14 lg:max-w-[1024px] lg:px-8 lg:pt-16 xl:xs:max-w-[1440px] xl:px-[7.5rem] xl:pt-20'>
      <div className='pb-8 xs:pb-10 sm:pb-10 md:pb-12 lg:pb-[2.75rem] xl:pb-[3.37rem]'>
        <Title title={'Цікаві новинки'} titleLink={'Дивитись все'} />
      </div>
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
