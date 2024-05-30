import type { Attributes } from '../types/product.types'

export function getColorsFromAttr(attributes: Attributes[]): Attributes[] {
  return attributes.filter(
    attr => attr.attribute_name.toLowerCase() === 'color'
  )
}
