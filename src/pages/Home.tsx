import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Categories } from '../components/home/Categories';
import { PromoSection } from '../components/home/PromoSection';
import { Newsletter } from '../components/home/Newsletter';

const Home: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'LUXE - Premium Lifestyle Products';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <PromoSection />
      <Newsletter />
    </>
  );
};

export default Home;