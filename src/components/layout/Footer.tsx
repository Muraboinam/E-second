import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">LUXE</h2>
            <p className="text-gray-300 mb-6">
              Elevating your lifestyle with premium, curated products for the modern connoisseur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rosegold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rosegold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rosegold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-rosegold-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Collections', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-rosegold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                'FAQ', 
                'Shipping & Returns', 
                'Store Policy', 
                'Payment Methods', 
                'Track Your Order'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/customer-service/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-rosegold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-rosegold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Luxury Avenue, Fashion District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-rosegold-500 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-rosegold-500 flex-shrink-0" />
                <span className="text-gray-300">support@luxe.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 border-t border-navy-700 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get exclusive offers, new arrivals and styling tips delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-navy-900"
              />
              <button className="bg-rosegold-500 hover:bg-rosegold-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright and Bottom Links */}
        <div className="mt-12 border-t border-navy-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
              <Link
                key={item}
                to={`/legal/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-400 hover:text-rosegold-500 text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};