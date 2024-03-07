import { cn } from '@/shared/lib/utils';
import { organizationList } from '@/app/small-clothes/lib/data';
import Image from 'next/image';
import npIcon from '@/assets/icons/companies/nova-poshta.svg';
import { HeartWithHandIcon, PhoneIcon } from '@/components/IconsPack';
import Breadcrumbs from '@/components/Breadcrumbs';

const crumbs = [
  {
    text: 'Є речі, з яких виросли?',
  },
];

export default function Page() {
  return (
    <div className='additional-wrap'>
      <div className='container'>
        <Breadcrumbs crumbs={crumbs} />
        {/* TODO: tw component H2*/}
        <h2 className={cn('heading-2', 'mb-5 sm:mb-6')}>
          Є речі, з яких виросли?
        </h2>

        <div className='flex flex-col gap-6 lg:flex-row lg:gap-[85px] xl:gap-[126px]'>
          <div className='space-y-5 text-sm'>
            <p>
              Будь-яка дитина має стійку тенденцію до зростання. І матуся після
              десятої безуспішної спроби натягнути на своє чадо светрик,
              зітхнувши, відкладає його вбік. Накопичується безліч непотрібних
              дрібничок, іграшок, ціла купа книг. І зберігати їх вже ніде. З цим
              необхідно щось робити.
            </p>

            <p>
              Ми радимо три благодійних проєкти, які допомагають дітям з
              інтернатів по всій Україні, ви можете відправити речі на
              відділення Нової пошти, або завітати до офісів запропонованих
              благодійних організацій:
            </p>

            <ul className='list-inside list-decimal'>
              <li>Кенгуруш. Соціальний проєкт</li>
              <li>Мурахи. Перша благодійна торгова платформа</li>
              <li>Карітас Україна. Благодійний Фонд</li>
            </ul>

            <p>
              <span className='font-medium'>Увага!</span> За доставку сплачує
              відправник. Попереджати про відправки не обов’язково.
            </p>

            <p>Приймають наступні речі:</p>

            <ul className='list-inside list-disc pl-1'>
              <li>взуття та одяг;</li>
              <li>старі сумки, рюкзаки;</li>
              <li>старі м’які іграшки;</li>
              <li>постільна білизна, ковдри та подушки;</li>
              <li>книги.</li>
            </ul>

            {/* TODO: tw component H4*/}
            <h3 className={cn('heading-4', 'pt-1')}>Речі повинні бути:</h3>

            <ul className='list-inside list-disc pl-1'>
              <li>чисті;</li>
              <li>справні;</li>
              <li>придатні до використання.</li>
            </ul>

            <div className='hidden lg:block lg:pt-12 xl:pt-[60px]'>
              <div className='mb-4 flex items-center gap-1 text-gray-900'>
                <HeartWithHandIcon />
                <div className='h-px w-full bg-gray-700'></div>
              </div>
              <p className='mb-4'>
                Віддаючи одяг, ви вдруге даєте йому нове життя, допомагаючи
                зменшити необхідність виробництва нових товарів і використання
                ресурсів.
              </p>
              <p>
                Таким чином, акція по збору дитячого одягу стає важливим кроком
                до створення більш стійкого та свідомого суспільства.
              </p>
            </div>
          </div>

          <div className='space-y-6 lg:w-[225px] lg:flex-none lg:space-y-0 xl:w-[282px]'>
            {/* TODO: tw component H4*/}
            <h3 className={cn('heading-4', 'lg:hidden')}>
              Список благодійних організацій та їх контакти
            </h3>

            <ul className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-1 xl:gap-6'>
              {organizationList.map((item) => (
                <li
                  key={item.desc}
                  className='rounded-xl bg-violet-300 px-4 py-4'>
                  <Image
                    src={item.logoSrc}
                    alt={item.desc}
                    height={64}
                    className='mx-auto mb-3 w-auto'
                  />

                  <div className='space-y-4 text-center text-xs'>
                    <h4 className='md:h-8'>{item.desc}</h4>

                    <div className='space-y-2 text-center'>
                      <a
                        href={item.link}
                        target='_blank'
                        className='text-blue-500 no-underline'>
                        {item.link.slice(12)}
                      </a>
                      <p className='md:mx-auto md:h-8 md:w-[190px]'>
                        {item.address}
                      </p>
                      <div className='flex items-center justify-center gap-1'>
                        <PhoneIcon />
                        <p>{item.phone}</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-center gap-1.5 border-t border-t-gray-300 pt-3'>
                      <div className='relative h-6 w-6'>
                        <Image src={npIcon} alt='Nova poshta' fill />
                      </div>

                      <p className='font-medium'>{item.novaPoshta}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className='pt-6 sm:pt-8 lg:hidden'>
              <div className='mb-4 flex items-center gap-1 text-gray-900'>
                <HeartWithHandIcon />
                <div className='h-px w-full bg-gray-700'></div>
              </div>
              <p className='mb-5 sm:mb-4'>
                Віддаючи одяг, ви вдруге даєте йому нове життя, допомагаючи
                зменшити необхідність виробництва нових товарів і використання
                ресурсів.
              </p>
              <p>
                Таким чином, акція по збору дитячого одягу стає важливим кроком
                до створення більш стійкого та свідомого суспільства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
