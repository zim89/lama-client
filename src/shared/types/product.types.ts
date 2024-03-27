export interface Images {
  id: number
  product: number
  product_image: string
}

export interface Category {
  id: number
  name: string
}

export interface Section {
  id: number
  name: string
}

export interface Brand {
  id: number
  name: string
}

export interface Discount {
  id: number
  amount: number
  info: string
  date_start: string
  date_end: string
}

export interface InStock {
  id: number
  in_stock: number
}

export interface Attributes {
  id: number
  attribute_name: string
  value: string
  attribute: number
  product: number
}

export interface Product {
  id: number
  product_images: Images[]
  category: Category
  section: Section
  brand: Brand
  discount: Discount
  in_stock: InStock[]
  attributes: Attributes[]
  name: string
  description: string
  price: string
  rating: number
  male: number
}

export interface ProductsResponse {
  count: number
  next: string
  previous: string
  results: Product[]
}
