import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sampleProducts } from '../../data/products';

export const Hero: React.FC = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const featuredProducts = sampleProducts.filter(product => product.featured);
  const currentProduct = featuredProducts[currentProductIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => {
        const next = prev + direction;
        if (next >= featuredProducts.length - 1) {
          setDirection(-1);
          return prev + direction;
        }
        if (next <= 0) {
          setDirection(1);
          return prev + direction;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProducts.length, direction]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="relative min-h-screen bg-navy-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div 
          key={currentProduct.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${currentProduct.images[0]})`,
          }}
        >
          <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-transparent to-navy-900/80" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <motion.span 
                className="inline-block text-rosegold-500 text-lg font-medium mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Featured Collection
              </motion.span>
              <motion.h1 className="text-4xl md:text-6xl font-bold text-white">
                {currentProduct.name}
              </motion.h1>
              <motion.div 
                className="mt-2 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-2xl font-bold text-white">${currentProduct.price}</span>
                {currentProduct.originalPrice && (
                  <span className="text-lg text-white/60 line-through">
                    ${currentProduct.originalPrice}
                  </span>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-white/90 mb-8"
          >
            Experience luxury redefined with our premium collection
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rosegold-500 hover:bg-rosegold-600 text-white px-8 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all"
            >
              Shop Now
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <motion.a
              href="/collections"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all"
            >
              Explore Collections
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Rotating Product Showcase */}
      <div className="absolute right-12 bottom-1/4 w-96 h-96 hidden lg:block">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentProduct.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 }
            }}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <img 
              src={currentProduct.images[0]} 
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium mb-1">{currentProduct.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-rosegold-500 font-bold">${currentProduct.price}</span>
                  {currentProduct.originalPrice && (
                    <span className="text-white/60 text-sm line-through">
                      ${currentProduct.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-2">
                  {currentProduct.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Navigation Indicators */}
      <div className="absolute bottom-32 right-12 hidden lg:flex gap-2">
        {featuredProducts.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentProductIndex 
                ? 'bg-rosegold-500 w-6' 
                : 'bg-white/30'
            } transition-all duration-300`}
            onClick={() => {
              setDirection(index > currentProductIndex ? 1 : -1);
              setCurrentProductIndex(index);
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </div>
        <p className="text-white text-sm mt-2">Scroll Down</p>
      </motion.div>
    </section>
  );
};