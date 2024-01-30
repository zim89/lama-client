import Hero from '@/modules/Hero';
import Brands from '@/modules/Brands';
import TopSection from '@/modules/TopSection/TopSection';
import OnSaleSection from '@/modules/OnSaleSection';

export default function Home() {
  return (
    <>
      <div className={'container'}>
        <h2 className={'text-violet-100 text-2xl font-bold text-black'}>
          Home page
        </h2>
      </div>

      <Hero />
      <Brands />
      <TopSection />
      <OnSaleSection />
    </>
  );
}
