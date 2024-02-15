import Brands from '@/modules/Brands';
import Hero from '@/modules/Hero';
import News from '@/modules/News/News';
import OnSaleSection from '@/modules/OnSaleSection';
import Toddler from '@/modules/Toddler/Toddler';
import TopSection from '@/modules/TopSection/TopSection';

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Brands />*/}
      <TopSection />
      <News />
      <Toddler />
      <OnSaleSection />
    </>
  );
}
