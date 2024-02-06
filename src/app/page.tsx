import Hero from '@/modules/Hero';
import Brands from '@/modules/Brands';
import TopSection from '@/modules/TopSection/TopSection';
import OnSaleSection from '@/modules/OnSaleSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <TopSection />
      <OnSaleSection />
    </>
  );
}
