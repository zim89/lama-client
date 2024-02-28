import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import {
  TruckIcon,
  ArticleIcon,
  LabelIcon,
  GiftIcon,
} from '@/components/icons';
import {
  categoryLinks,
  featureList,
  payList,
  socialLinks,
} from '@/modules/Footer/lib/data';
import FooterAccordion from './ui/FooterAccordion';
import logoMobileImg from '@/assets/icons/logo/logo-tablet.png';
import logoTabletImg from '@/assets/icons/logo/logo-desktop.png';
import styles from './styles/footer.module.css';
import { serviceLinks } from '@/shared/lib/data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TOP Section*/}
      <div className='container'>
        <div className={styles.topWrap}>
          {/* Features */}
          <ul className={styles.featureList}>
            {featureList.map((item) => (
              <li key={item.label} className={styles.featureItem}>
                {item.label === 'truck' && <TruckIcon />}
                {item.label === 'article' && <ArticleIcon />}
                {item.label === 'label' && <LabelIcon />}
                {item.label === 'gift' && <GiftIcon />}
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Image
            src={logoMobileImg}
            alt={'Lama logo'}
            width={51}
            height={26}
            className={'mx-auto md:hidden'}
          />
          <div className={styles.logoThumb}>
            <Image
              src={logoTabletImg}
              alt={'Lama logo'}
              width={80}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* CENTER Section */}
      <div className='md:hidden'>
        <FooterAccordion />

        {/* Social Links */}
        <ul className={styles.socialMobileList}>
          {socialLinks.map((item) => {
            const LinkIcon = item.icon;
            return (
              <li key={item.label}>
                <a href={item.link} target='_blank'>
                  <LinkIcon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={cn('container', 'hidden md:block')}>
        <div className={styles.centerWrap}>
          {/* Contacts */}
          <div className={styles.contactWrap}>
            <div>
              <h3>Контакти</h3>
              <ul>
                <li className={styles.item}>
                  місто Київ, <br /> вул. Димитрівська 112/2
                </li>
                <li className={styles.item}>Пн-Сб 09:00-19:00</li>
                <li className={styles.item}>Неділя - вихідний</li>
                <li className={styles.item}>0800-353-55-88</li>
                <li className={styles.item}>
                  <a href='mailto:lamastore@lama.com' className='decoration-0'>
                    lamastore@lama.com
                  </a>
                </li>
              </ul>
            </div>

            <ul className='flex items-center gap-4 lg:hidden'>
              {socialLinks.map((item) => {
                const LinkIcon = item.icon;
                return (
                  <li key={item.label} className={styles.socialItem}>
                    <a
                      href={item.link}
                      target={'_blank'}
                      className={styles.socialItem}>
                      <LinkIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Socials */}
          <div className={styles.socialWrap}>
            <h3 className='pb-2 xl:pb-4'>Слідкуйте за нами</h3>
            <ul className={styles.socialList}>
              {socialLinks.map((item) => {
                const LinkIcon = item.icon;
                return (
                  <li key={item.label} className={styles.socialItem}>
                    <a href={item.link} target={'_blank'}>
                      <LinkIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3>Популярні категорії</h3>
            <ul>
              {categoryLinks.map((link) => (
                <li key={link.label} className={styles.item}>
                  <Link href={link.href} className='textLink'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3>Допомога</h3>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label} className={styles.item}>
                  <Link href={link.href} className='textLink'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM Section */}
      <div className='md:container'>
        <div className={styles.bottomWrap}>
          <p>&#169; 2023 Lama store</p>
          <ul className={styles.payList}>
            {payList.map((item) => (
              <li key={item.label}>
                <Image
                  src={item.image_src}
                  alt={item.label}
                  width={24}
                  height={24}
                  className='lg:hidden'
                />
                <Image
                  src={item.image_src}
                  alt={item.label}
                  width={40}
                  height={40}
                  className='hidden lg:block'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
