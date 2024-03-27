'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const items = [
  { id: 'Дивитись все', label: 'Дивитись все' },
  { id: 'Бананки', label: 'Бананки' },
  { id: 'Біжутерія, заколки', label: 'Біжутерія, заколки' },
  { id: 'Сонцезахисні окуляри', label: 'Сонцезахисні окуляри' },
  { id: 'Рюкзаки', label: 'Рюкзаки' },
  { id: 'Рукавиці', label: 'Рукавиці' },
  { id: 'Сумочки', label: 'Сумочки' },
  { id: 'СШарфи', label: 'Шарфи' },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function AccessoriesForm() {
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const params = new URLSearchParams(searchParams.toString());
    const category = params.get('category');
  };

  return (
    <Popover>
      <PopoverTrigger className='group flex w-full items-center justify-between rounded-b-lg rounded-t-lg border border-gray-300 bg-gray-100 px-3 py-[14px] text-xs font-medium data-[state=open]:rounded-b-none'>
        Аксесуари
        <ChevronDown className='size-4 text-gray-900 transition-transform duration-300 group-data-[state=open]:rotate-180' />
      </PopoverTrigger>

      <PopoverContent
        align='end'
        sideOffset={-1}
        className='w-fit space-y-3 rounded-lg rounded-tr-none border border-gray-300 px-2 py-3'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2'>
            <FormField
              control={form.control}
              name='items'
              render={() => (
                <FormItem>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='items'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex items-center gap-2 py-2'>
                            <FormControl>
                              <Checkbox
                                className='border-gray-300'
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className='!m-0 text-xs'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <Button
              type='submit'
              disabled={form.getValues('items').length === 0}>
              Зберегти
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
