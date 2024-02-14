import Brands from '@/modules/Brands';
import HelpYouFind from '@/modules/HelpYouFind';
import Hero from '@/modules/Hero';
import OnSaleSection from '@/modules/OnSaleSection';
import TopSection from '@/modules/TopSection/TopSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <HelpYouFind />
      <TopSection />
      <OnSaleSection />
    </>
  );
}
