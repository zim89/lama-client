import Hero from '@/modules/Hero';
import Brands from '@/modules/Brands';

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
    </>
  );
}
