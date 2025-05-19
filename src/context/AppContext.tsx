import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ThemeProvider>
  );
};