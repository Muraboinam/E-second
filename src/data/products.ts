import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Luxe Leather Crossbody Bag',
    description: 'Crafted from premium Italian leather with a sleek, minimalist design. Features multiple compartments and an adjustable strap.',
    price: 349.99,
    originalPrice: 429.99,
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Accessories',
    tags: ['Leather', 'Bags', 'Accessories'],
    featured: true,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    new: true,
    colors: ['Black', 'Brown', 'Tan']
  },
  {
    id: '2',
    name: 'Premium Cashmere Sweater',
    description: 'Luxuriously soft cashmere sweater that provides exceptional warmth without bulk. Versatile design suitable for both casual and formal occasions.',
    price: 299.99,
    images: [
      'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6069553/pexels-photo-6069553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Clothing',
    tags: ['Cashmere', 'Sweater', 'Winter'],
    featured: true,
    rating: 4.9,
    reviews: 84,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Navy']
  },
  {
    id: '3',
    name: 'Artisanal Ceramic Vase Set',
    description: 'Handcrafted ceramic vases made by master artisans. Each piece is unique and features subtle variations in glaze and form.',
    price: 189.99,
    originalPrice: 219.99,
    images: [
      'https://images.pexels.com/photos/6195084/pexels-photo-6195084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5368618/pexels-photo-5368618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Home',
    tags: ['Ceramic', 'Decor', 'Vase'],
    featured: false,
    rating: 4.7,
    reviews: 56,
    inStock: true,
    colors: ['White', 'Terracotta', 'Blue']
  },
  {
    id: '4',
    name: 'Swiss Chronograph Watch',
    description: 'Precision Swiss movement encased in sapphire crystal and premium stainless steel. Water-resistant to 100 meters with luminous hands.',
    price: 799.99,
    originalPrice: 999.99,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2494608/pexels-photo-2494608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Accessories',
    tags: ['Watch', 'Luxury', 'Swiss'],
    featured: true,
    rating: 4.9,
    reviews: 113,
    inStock: true,
    sale: true,
    colors: ['Silver', 'Gold', 'Black']
  },
  {
    id: '5',
    name: 'Organic Cotton Bedding Set',
    description: 'Made from 100% organic, long-staple cotton for exceptional softness and durability. Includes fitted sheet, flat sheet, and two pillowcases.',
    price: 249.99,
    images: [
      'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6312366/pexels-photo-6312366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Home',
    tags: ['Bedding', 'Organic', 'Cotton'],
    featured: false,
    rating: 4.8,
    reviews: 72,
    inStock: true,
    sizes: ['Twin', 'Full', 'Queen', 'King'],
    colors: ['White', 'Gray', 'Sand']
  },
  {
    id: '6',
    name: 'Handcrafted Leather Wallet',
    description: 'Slim, functional wallet crafted from full-grain leather that develops a beautiful patina over time. Features 6 card slots and 2 bill compartments.',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/45050/wallet-money-credit-card-online-45050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Accessories',
    tags: ['Leather', 'Wallet', 'Accessories'],
    featured: true,
    rating: 4.7,
    reviews: 94,
    inStock: true,
    colors: ['Black', 'Brown', 'Tan']
  },
  {
    id: '7',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium audio experience with adaptive noise cancellation, personalized sound profiles, and up to 30 hours of battery life.',
    price: 399.99,
    originalPrice: 459.99,
    images: [
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['Audio', 'Wireless', 'Headphones'],
    featured: false,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    sale: true,
    colors: ['Black', 'Silver', 'Rose Gold']
  },
  {
    id: '8',
    name: 'Premium Scented Candle Collection',
    description: 'Set of three hand-poured soy wax candles with essential oil fragrances. Housed in reusable artisanal glass containers.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7316084/pexels-photo-7316084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Home',
    tags: ['Candles', 'Fragrance', 'Decor'],
    featured: false,
    rating: 4.6,
    reviews: 63,
    inStock: true,
    new: true
  }
];