import applePayImg from '@/assets/icons/payments/payApple.png'
import googlePayImg from '@/assets/icons/payments/payGoogle.png'
import mastercardImg from '@/assets/icons/payments/payMastercard.png'
import visaImg from '@/assets/icons/payments/payVisa.png'
import { categoryLinks, serviceLinks, supportLinks } from './links.data'

export const payList = [
  { label: 'visa', image_src: visaImg },
  { label: 'mastercard', image_src: mastercardImg },
  { label: 'applePay', image_src: applePayImg },
  { label: 'googlePay', image_src: googlePayImg }
] as const

export const accordionList = [
  { label: 'Популярні категорії', items: categoryLinks },
  { label: 'Допомога', items: serviceLinks },
  { label: 'Служба підтримки', items: supportLinks }
] as const
