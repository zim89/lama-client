'use client';
import React from 'react';
import { Accordion } from '@mantine/core';
import Link from 'next/link';

import { categoryList, serviceList } from '../lib/data';

function FooterAccordion() {
  return (
    <Accordion
      chevronSize={18}
      classNames={{
        root: 'border-t border-t-gray-500',
        item: 'border-b-gray-500',
        control: 'px-4',
        label: 'py-2 text-xs font-medium',
        chevron: 'text-gray-900',
      }}>
      <Accordion.Item value={'Популярні категорії'}>
        <Accordion.Control>Популярні категорії</Accordion.Control>
        <Accordion.Panel>
          <ul className={'flex flex-col gap-1'}>
            {categoryList.map((item) => (
              <li key={item.label} className={'text-xs'}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value={'Допомога'}>
        <Accordion.Control>Допомога</Accordion.Control>
        <Accordion.Panel>
          <ul className={'flex flex-col gap-1'}>
            {serviceList.map((item) => (
              <li key={item.label} className={'text-xs'}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value={'Контакти'}>
        <Accordion.Control>Контакти</Accordion.Control>
        <Accordion.Panel>
          <div className={'flex flex-col gap-2 text-xs'}>
            <p>Київ, вул. Димитрівська, 112/2</p>
            <p>Пн-Сб 09:00-19:00</p>
            <p>Неділя - вихідний</p>
            <p>0800-353-55-88</p>
            <a href='mailto:lamastore@lama.com'>lamastore@lama.com</a>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default FooterAccordion;
