export interface ProductImages {
  id: number;
  product: number;
  product_image: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Section {
  id: number;
  name: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Discount {
  id: number;
  name: number;
}

export interface InStockColor {
  id: number;
  name: string;
}

export interface InStockProductSize {
  id: number;
  brand_size: number;
  letter_size: string;
}

export interface InStock {
  id: number;
  color: InStockColor;
  product_size: InStockProductSize;
  in_stock: number;
}

export interface Product {
  id: number;
  product_images: ProductImages[];
  category: Category;
  section: Section;
  brand: Brand;
  discount: Discount | null;
  in_stock: InStock[];
  name: string;
  description: string;
  item_number: string;
  price: number;
  rating: number;
  age: number;
  male: boolean;
  is_sale: boolean;
}
