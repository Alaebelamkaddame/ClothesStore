import Hero from '@/components/hero'
import Products from '@/components/products';
import WhyUs from '@/components/whyUs';

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Products />
        <WhyUs />
      </div>
    </>
  );
}
