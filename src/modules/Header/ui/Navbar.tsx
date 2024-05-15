'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { cn } from '@/shared/lib/utils'
import NavSlider from './NavSlider'
import { categoryLinks } from '@/shared/data/links.data'

export default function Navbar() {
  const path = usePathname()

  return (
    <div className='hidden lg:block'>
      <NavigationMenu>
        <NavigationMenuList className='flex items-center gap-4 xl:gap-6'>
          {categoryLinks.map(link => {
            const isActive = path.includes(link.href)

            return (
              <NavigationMenuItem key={link.label}>
                <Link href={link.href}>
                  <NavigationMenuTrigger
                    className={cn(
                      'relative text-base h-auto p-0 bg-secondary-300 before:absolute before:-bottom-5 before:left-0 before:h-[1.5px] before:w-full before:scale-0 before:bg-black before:transition-all before:duration-300 hover:before:scale-100 data-[state=open]:before:scale-100',
                      isActive &&
                        'after:absolute after:-bottom-5 after:left-0 after:block after:w-full after:h-[1.5px] after:bg-black'
                    )}
                  >
                    {link.label}
                  </NavigationMenuTrigger>
                </Link>

                {link.items.length > 6 ? (
                  <NavSlider items={link.items} />
                ) : (
                  <NavigationMenuContent className='p-0 w-full border-0'>
                    <div
                      className={cn(
                        'container flex gap-5 justify-start py-8 xl:py-11'
                      )}
                    >
                      {link.items.map(item => (
                        <Link
                          href={item.href}
                          legacyBehavior
                          passHref
                          key={item.label}
                        >
                          <NavigationMenuLink>
                            <div className='text-sm font-medium text-center space-y-2'>
                              <Image
                                alt={item.label}
                                src={item.image}
                                width={140}
                                height={140}
                                className='xl:hidden'
                              />
                              <Image
                                alt={item.label}
                                src={item.image_large}
                                width={180}
                                height={180}
                                className='hidden xl:block'
                              />
                              <p>{item.label}</p>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
