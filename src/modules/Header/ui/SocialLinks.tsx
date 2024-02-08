import { FacebookIcon, InstagramIcon, TiktokIcon } from '@/components/icons';

export default function SocialLinks() {
  return (
    <ul className='flex justify-center'>
      <li>
        <a
          href='https://www.tiktok.com/'
          target='_blank'
          className='flex h-10 w-10 items-center justify-center'>
          <TiktokIcon />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          className='flex h-10 w-10 items-center justify-center'>
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          className='flex h-10 w-10 items-center justify-center'>
          <FacebookIcon />
        </a>
      </li>
    </ul>
  );
}
