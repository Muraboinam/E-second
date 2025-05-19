import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const PromoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && textRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
      
      tl.fromTo(
        textRef.current.children,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
      
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="py-20 bg-navy-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exclusive Summer Collection
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Discover our limited edition summer essentials, crafted from premium materials and designed for those who appreciate the finer things in life. Available for a limited time only.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/collections/summer"
                className="inline-flex items-center bg-rosegold-500 hover:bg-rosegold-600 text-white px-6 py-3 rounded-md font-medium transition-all"
              >
                Shop the Collection
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="/lookbook"
                className="inline-flex items-center bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md font-medium transition-all"
              >
                View Lookbook
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rosegold-500">20+</h3>
                <p className="text-gray-300 text-sm">New Styles</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rosegold-500">100%</h3>
                <p className="text-gray-300 text-sm">Premium Materials</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rosegold-500">14 Days</h3>
                <p className="text-gray-300 text-sm">Free Returns</p>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            <img
              src="https://images.pexels.com/photos/5560023/pexels-photo-5560023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Summer Collection"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-rosegold-500 text-white p-4 rounded-lg shadow-xl">
              <p className="text-sm font-bold">Limited Edition</p>
              <p className="text-2xl font-bold">UP TO 30% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};