import Image from 'next/image'
import Link from 'next/link'
import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon
} from '@/components/IconsPack'
import FooterAccordion from './ui/FooterAccordion'
import { payList } from '@/shared/data/footer.data'
import { footerCategoryLinks, helpLinks } from '@/shared/data/links.data'

export default function Footer() {
  return (
    <footer className='bg-secondary-100 py-8 md:py-9 lg:py-11 xl:py-14'>
      <div className='container'>
        <div className='space-y-8 md:hidden'>
          <FooterAccordion />

          <div className='flex items-center justify-between py-2'>
            <p className='text-[9px]/4 font-medium text-muted'>
              © 2024 Babby’s
            </p>
            <p className='flex items-center text-xs gap-1 text-black'>
              <InstagramIcon />
              Instagram
            </p>
            <ul className='flex gap-2'>
              {payList.map(item => (
                <li key={item.label}>
                  <Image
                    src={item.image_src}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='hidden md:flex md:justify-between md:h-[304px] lg:gap-5 lg:h-[256px] xl:gap-6 xl:h-[260px]'>
          <div className='flex flex-col justify-between w-[226px] xl:w-[282px]'>
            <div className='space-y-2'>
              <h3 className='text-base font-medium'>Популярні категорії</h3>
              <ul className='grid grid-cols-1'>
                {footerCategoryLinks.map(link => (
                  <li
                    key={link.label}
                    className='py-1.5 text-sm'
                  >
                    <Link
                      href={link.href}
                      className='textLink'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p className='text-xs text-muted flex items-center h-8'>
              © 2024 Babby’s
            </p>
          </div>
          <div className='flex flex-col justify-between w-[226px] xl:w-[282px]'>
            <div className='space-y-2'>
              <h3 className='text-base font-medium'>Допомога</h3>
              <ul className='grid grid-cols-1'>
                {helpLinks.map(link => (
                  <li
                    key={link.label}
                    className='py-1.5 text-sm'
                  >
                    <Link
                      href={link.href}
                      className='textLink'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className='flex gap-4 h-8 items-center'>
              {payList.map(item => (
                <li key={item.label}>
                  <Image
                    src={item.image_src}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col justify-between w-[226px] lg:flex-1'>
            <div className='space-y-2'>
              <h3 className='text-base font-medium'>Служба підтримки</h3>
              <ul className='text-sm'>
                <li className='flex flex-col lg:flex-row lg:gap-2 lg:items-center'>
                  <a
                    href='tel:380636235212'
                    className='decoration-0 py-1.5'
                  >
                    +380 63 623 52 12
                  </a>
                  <span>Відділ продажу</span>
                </li>
                <li className='flex flex-col lg:flex-row lg:gap-2 lg:items-center pb-2 '>
                  <a
                    href='tel:380636235212'
                    className='decoration-0 py-1.5'
                  >
                    +380 63 623 52 12
                  </a>
                  <span>Контакт для співпраці</span>
                </li>
                <li className='flex items-center gap-1 py-1'>
                  <MailIcon />
                  <a
                    href='mailto:babbystore@gmail.com'
                    className='decoration-0'
                  >
                    babbystore@gmail.com
                  </a>
                </li>
                <li className='flex items-center gap-1 py-1'>
                  <ClockIcon />
                  <span>Пн-Нд 10:00-18:00</span>
                </li>
                <li className='flex items-center gap-1 py-1'>
                  <div className='flex-none'>
                    <MapPinIcon />
                  </div>

                  <p className='flex flex-col lg:flex-row'>
                    <span>вул. Кожедуба, 3а, </span>
                    <span>м. Буча, Київська обл.</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className='flex gap-1 h-8 items-center text-sm'>
              <InstagramIcon />
              Instagram
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
