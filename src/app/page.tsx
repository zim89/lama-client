import FeaturesSection from '@/modules/FeaturesSection'
import HelpYouFind from '@/modules/HelpYouFind'
import Hero from '@/modules/Hero'
import News from '@/modules/News/News'
import OnSaleSection from '@/modules/OnSaleSection'
import Toddler from '@/modules/Toddler/Toddler'
import TopSection from '@/modules/TopSection/TopSection'
import { Rating } from '@/components/Rating'

export default function Home() {
  return (
    <div className='pb-10 sm:pb-11 md:pb-14 lg:pb-16 xl:pb-20'>
      <Hero />
      <HelpYouFind />
      <TopSection />
      <News />
      <Toddler />
      <OnSaleSection />
      <FeaturesSection />
    </div>
  )
}
