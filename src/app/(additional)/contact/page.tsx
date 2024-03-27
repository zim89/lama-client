import { cn } from '@/shared/lib/utils';
import { PhoneIcon } from '@/components/IconsPack';
import ContactUsForm from '@/components/ContactUsForm';

export default function Page() {
  return (
    <div>
      <div className='container lg:hidden'>
        <h2 className={cn('heading-2', 'mb-11 sm:mb-12 md:mb-14')}>
          Способи зв’язку з нами
        </h2>
      </div>
      <h2 className='mb-9 hidden pl-4 text-[28px]/[32px] font-medium lg:block'>
        Способи зв’язку з нами
      </h2>

      <div className='bg-violet-300 pb-6 pt-4 text-sm sm:pb-8 sm:pt-5 lg:p-6 lg:pb-9'>
        <div className='container space-y-11 lg:w-full lg:p-0'>
          <p className='max-w-[840px]'>
            Якщо у вас є запитання, ми готові допомогти. Будь ласка,
            скористайтеся полями нижче щоб отримати відповідь.{' '}
            <br className='hidden xl:inline' />
            Або наберіть за номером телефону у робочий час адміністратора.
          </p>

          <ContactUsForm />

          <div className='space-y-5'>
            <h3 className={cn('heading-4', 'flex items-center gap-2')}>
              <PhoneIcon />
              Зателефонуйте нам
            </h3>
            <p>
              {`Ми готові вам допомогти, але вам, можливо, доведеться почекати
                кілька хвилин, поки ми вас з'єднаємо.`}
            </p>
            <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
              <a
                href='tel:8003535588'
                className='text-base/[20px] font-medium text-blue-500 underline'>
                0800-353-55-88
              </a>
              <p>Пн-Сб 09:00-19:00</p>
              <p>Неділя - вихідний</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
