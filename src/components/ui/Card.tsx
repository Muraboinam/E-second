import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
}) => {
  const baseClasses = 'rounded-lg overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-navy-800 shadow-soft-xl',
    glass: 'bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm border border-white/20 dark:border-navy-700/20 shadow-soft-xl',
  };
  
  const hoverClasses = hover
    ? 'hover:shadow-soft-2xl hover:-translate-y-1 transition-all duration-300'
    : '';
  
  const cardProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`,
    onClick,
  };
  
  return onClick ? (
    <motion.div 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      {...cardProps}
    >
      {children}
    </motion.div>
  ) : (
    <div {...cardProps}>{children}</div>
  );
};