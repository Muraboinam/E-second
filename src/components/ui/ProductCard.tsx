import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addItem } = useCart();
  
  // Add to cart handler
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };
  
  // Calculate discount percentage
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-lg ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-100">
        <LazyLoadImage
          src={product.images[0]}
          alt={product.name}
          effect="blur"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
          <div className="flex flex-col gap-2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-navy-900 p-3 rounded-full shadow-md"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-rosegold-500 text-white p-3 rounded-full shadow-md"
              aria-label="Add to cart"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Product badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.new && (
          <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.sale && (
          <span className="bg-rosegold-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="bg-rosegold-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </span>
        )}
      </div>
      
      {/* Product info */}
      <div className="p-4 bg-white dark:bg-navy-800">
        <h3 className="text-lg font-medium text-navy-900 dark:text-white truncate">
          {product.name}
        </h3>
        
        <div className="mt-1 flex justify-between items-center">
          <div className="flex items-end gap-1">
            <span className="text-lg font-bold text-navy-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center">
            <span className="text-sm text-yellow-500">★</span>
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        
        {/* Tags/Categories */}
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="inline-block text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-navy-700 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};