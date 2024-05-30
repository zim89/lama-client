export const formatPrice = (num: number, suffix = '₴') => {
  return `${new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(num)} ${suffix}`
}

export const formatPriceWithDiscount = (price: string, discount: number) => {
  const priceWithDiscount = Number(price) - (Number(price) * discount) / 100
  return `${new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(priceWithDiscount)}`
}
