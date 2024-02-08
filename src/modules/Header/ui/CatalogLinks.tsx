'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BoyIcon, GirlIcon } from '@/components/icons';
import { mobileCategoryList } from '@/modules/Header/lib/data';
import Image from 'next/image';

export default function CatalogLinks() {
  return (
    <Tabs defaultValue='boys'>
      <TabsList className='flex h-auto items-center justify-between p-0'>
        <TabsTrigger asChild value='girls' className='p-0'>
          <button
            type='button'
            className='relative space-x-1 p-0 pb-4 text-sm font-bold text-black after:bg-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full'>
            <GirlIcon />
            <span>Дівчатам</span>
          </button>
        </TabsTrigger>
        <TabsTrigger asChild value='boys' className='flex-none p-0'>
          <button
            type='button'
            className='relative space-x-1 p-0 pb-4 text-sm font-bold text-black after:bg-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full'>
            <BoyIcon />
            <span>Хлопчикам</span>
          </button>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='boys' asChild>
        <ul className='flex flex-col gap-2 pt-3'>
          {mobileCategoryList.map((item) => (
            <li
              key={item.label}
              className='flex items-center justify-between overflow-hidden rounded-lg bg-indigo-300 pl-4 text-xs font-bold'>
              <p>{item.label}</p>
              <Image
                src={item.boyImg}
                alt={item.label}
                width={64}
                height={48}
              />
            </li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value='girls' asChild>
        <ul className='flex flex-col gap-2 pt-3'>
          {mobileCategoryList.map((item) => (
            <li
              key={item.label}
              className='flex items-center justify-between overflow-hidden rounded-lg bg-pink-300 pl-4 text-xs font-bold'>
              <p>{item.label}</p>
              <Image
                src={item.girlImg}
                alt={item.label}
                width={64}
                height={48}
              />
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
