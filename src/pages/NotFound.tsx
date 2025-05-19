import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = '404 - Page Not Found | LUXE';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-rosegold-500">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center bg-navy-800 hover:bg-navy-900 dark:bg-rosegold-500 dark:hover:bg-rosegold-600 text-white px-6 py-3 rounded-md font-medium transition-all"
            >
              <Home className="mr-2" size={18} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Animated elements */}
        <div className="relative mt-16">
          <motion.div
            className="absolute -top-10 -left-10 w-12 h-12 rounded-full bg-rosegold-300 dark:bg-rosegold-800 opacity-50"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-10 left-20 w-8 h-8 rounded-full bg-emerald-300 dark:bg-emerald-800 opacity-50"
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute -top-5 right-10 w-10 h-10 rounded-full bg-primary-300 dark:bg-primary-800 opacity-50"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;