'use client';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import { z } from 'zod';
import { cn } from '@/shared/lib/utils';
import { ChevronDownIcon } from '@/components/IconsPack';

const THEME_VALUES = [
  'Доставка і оплата',
  'Обмін та повернення',
  'Наявність товару',
  'Догляд за одягом',
  'Інше',
] as const;

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  theme: z.enum(THEME_VALUES),
  message: z
    .string()
    .min(5, {
      message: 'Message must be 5-800 characters long',
    })
    .max(800, {
      message: 'Message must be 5-800 characters long',
    }),
});

export default function ContactUsForm() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onChange = (value: (typeof THEME_VALUES)[number]) => {
    delete errors.theme;
    setValue('theme', value);
    setIsOpen(false);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className='space-y-6 lg:w-[442px] xl:w-[462px]'>
      <h3 className='flex items-center gap-2 text-base font-medium'>
        <MailIcon />
        Надішліть електронного листа
      </h3>

      <div className='relative flex flex-col gap-1'>
        <label htmlFor='email' className='relative text-xs text-gray-900'>
          Електронна адреса
          <p className='absolute right-0 top-1/2 -translate-y-1/2 text-xs text-red-500'>
            {errors.email?.message}
          </p>
        </label>

        <input
          {...register('email')}
          autoComplete='off'
          aria-invalid={errors.email ? 'true' : 'false'}
          className='select-none rounded-lg border border-gray-500 bg-gray-100 px-5 py-2.5 text-base text-gray-900 outline-none focus:border-gray-700 aria-[invalid=true]:border-red-500'
        />
      </div>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        aria-invalid={errors.theme ? 'true' : 'false'}
        className={cn(
          'overflow-hidden rounded-lg border border-gray-500 bg-gray-100 aria-[invalid=true]:border-red-500',
          isOpen && 'border-gray-700'
        )}>
        <CollapsibleTrigger
          className={cn(
            'flex w-full items-center justify-between py-2.5 pl-4 pr-2 text-base text-gray-900',
            isOpen && 'border-b border-b-gray-700 text-gray-700'
          )}>
          {getValues('theme') ? getValues('theme') : 'Оберіть тему'}
          <span
            className={cn(
              isOpen && 'rotate-180 transition-transform duration-300'
            )}>
            <ChevronDownIcon />
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            {THEME_VALUES.map((item) => (
              <li
                key={item}
                onClick={() => onChange(item)}
                className={cn(
                  'cursor-pointer border-b border-b-gray-500 px-4 py-2.5 text-base text-gray-900 last:border-b-0',
                  item === getValues('theme') && 'bg-amber-500'
                )}>
                {item}
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <div className='relative flex flex-col gap-1'>
        <label htmlFor='message' className='relative text-xs text-gray-900'>
          Ваш текст
          <p className='absolute right-0 top-1/2 -translate-y-1/2 text-xs text-red-500'>
            {errors.message?.message}
          </p>
        </label>
        <textarea
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          className='h-[156px] resize-none rounded-lg border border-gray-500 bg-gray-100 px-5 py-2 text-base text-gray-900 outline-none focus:border-gray-700 aria-[invalid=true]:border-red-500'
        />
        <p className='text-right text-xs text-gray-700'>
          Максимум 800 символів
        </p>
      </div>

      <div className='pt-2'>
        <button type='submit' className={cn('btn-primary', 'w-full')}>
          Відправити
        </button>
      </div>
    </form>
  );
}
