"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Headers() {
    const Menu = [
        {
            id:1,
            name: 'Home',
            link: '/'
        },
        {
            id:2,
            name: 'About',
            link: '/about'
        },
        {
            id:3,
            name: 'Book Online Consultation',
            link: '/consultation'
        },
        {
            id:4,
            name: 'Immediate Care',
            link: '/immediate-care'
        },
    ]
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src={"/logo.png"} alt='logo' height={120} width={100} />
        <ul className='md:flex gap-8 hidden'>
          {Menu.map((item, index) => (
            <Link href={item.link} key={item.id}>
              <li className='hover:text-primary cursor:pointer hover:scale-105 transition-all ease-in-out'>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='flex items-center'>
        <Button>Get Started</Button>

        <div className='md:hidden p-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className='text-primary hover:text-primary-dark'
                onClick={toggleMenu}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {Menu.map((item, index) => (
                  <Link href={item.link} key={item.id}>
                    <DropdownMenuLabel className='hover:text-primary cursor:pointer'>
                      {item.name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                  </Link>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Headers