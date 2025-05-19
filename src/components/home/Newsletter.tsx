import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here would be the actual subscription logic
      setIsSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-navy-800/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Mail size={40} className="mx-auto mb-4 text-rosegold-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips delivered straight to your inbox.
          </p>
          
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 dark:border-navy-600 focus:outline-none focus:ring-2 focus:ring-rosegold-500 dark:bg-navy-700 dark:text-white"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3 bg-rosegold-500 hover:bg-rosegold-600 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 p-4 rounded-md"
            >
              <p className="font-medium">
                Thank you for subscribing! Check your email for a confirmation.
              </p>
            </motion.div>
          )}
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};