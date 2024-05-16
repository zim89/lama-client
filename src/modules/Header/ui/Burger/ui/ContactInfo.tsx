import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon
} from '@/components/IconsPack'

export default function ContactInfo() {
  return (
    <div className='pt-4 text-xs'>
      <h3 className='py-3 font-medium'>Служба підтримки</h3>
      <p className='flex items-center gap-2 py-3'>
        <span>+380 63 613 54 16</span>
        <span>Відділ продажу</span>
      </p>
      <p className='flex items-center gap-2 py-3'>
        <span>+380 63 623 52 12</span>
        <span>Контакт для співпраці</span>
      </p>
      <div className='flex items-center gap-1 py-2'>
        <MailIcon />
        <a
          href='mailto:babbystore@gmail.com'
          className='decoration-0'
        >
          babbystore@gmail.com
        </a>
      </div>
      <div className='flex items-center gap-1 py-2'>
        <ClockIcon />
        <span>Пн-Нд 10:00-18:00</span>
      </div>
      <div className='flex items-center gap-1 py-2'>
        <MapPinIcon />
        <span>вул. Кожедуба, 3а, м. Буча, Київська обл.</span>
      </div>
      <div className='flex items-center gap-1 py-2'>
        <InstagramIcon />
        <span>Instagram</span>
      </div>
    </div>
  )
}
