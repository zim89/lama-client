import type { Product, ProductsResponse } from '@/shared/types/product.types'
import { axiosBase } from '@/shared/api/interceptors'

class ProductService {
  // private BASE_URL = '/products'

  async getTopProducts() {
    const response = await axiosBase.get<Product[]>('/top')
    return response.data
  }

  async getOnSaleProducts() {
    const response = await axiosBase.get<Product[]>('/on_sale')
    return response.data
  }

  async getProducts(page: number, category: string, section: string) {
    const limit = 12
    const offset = page * limit

    const params = new URLSearchParams()
    params.set('limit', limit.toString())
    params.set('offset', offset.toString())

    if (category) params.set('category', category.toString())
    if (section) params.set('section', section.toString())

    const response = await axiosBase.get<ProductsResponse>(
      `/products?${params}`
    )
    return response.data
  }
}

export const productService = new ProductService()
