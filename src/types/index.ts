export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  featured?: boolean;
  rating: number;
  reviews: number;
  inStock: boolean;
  new?: boolean;
  sale?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: string;
  user: User;
  product: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
}

export interface Wishlist {
  id: string;
  product: Product;
  addedAt: string;
}