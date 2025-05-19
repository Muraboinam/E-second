import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm shadow-md py-3'
      : 'bg-transparent py-5'
  }`;

  const logoClasses = `text-xl font-bold ${
    isScrolled || theme === 'dark' ? 'text-navy-900 dark:text-white' : 'text-white'
  }`;

  const linkClasses = `relative font-medium text-sm hover:text-rosegold-500 transition-colors ${
    isScrolled || theme === 'dark' ? 'text-navy-900 dark:text-white' : 'text-white'
  }`;

  const buttonClasses = `ml-2 ${
    isScrolled || theme === 'dark' 
      ? 'text-navy-900 dark:text-white hover:text-rosegold-500' 
      : 'text-white hover:text-rosegold-500'
  }`;

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={logoClasses}>
            LUXE
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${linkClasses} mx-4`}
              >
                <span className="relative">
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rosegold-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </span>
              </Link>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`${buttonClasses} p-2`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Search */}
            <button className={`${buttonClasses} p-2`} aria-label="Search">
              <Search size={20} />
            </button>
            
            {/* User */}
            <Link to="/account" className={`${buttonClasses} p-2`} aria-label="Account">
              <User size={20} />
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className={`${buttonClasses} p-2 relative`} aria-label="Cart">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rosegold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 text-gray-600 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-16 right-0 bottom-0 left-0 bg-white dark:bg-navy-900 z-40"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-navy-900 dark:text-white font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-navy-700">
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = '/products';
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};