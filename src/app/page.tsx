import HelpYouFind from '@/modules/HelpYouFind';
import Hero from '@/modules/Hero';
import News from '@/modules/News/News';
import OnSaleSection from '@/modules/OnSaleSection';
import Toddler from '@/modules/Toddler/Toddler';
import TopSection from '@/modules/TopSection/TopSection';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Brands /> */}
      <HelpYouFind />
      <TopSection />
      <News />
      <Toddler />
      <OnSaleSection />
    </>
  );
}
