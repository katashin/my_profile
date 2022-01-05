import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import { HamburgerMenu } from './Hamburger';

export const Header = () => {
  const menus: string[] = ['about', 'skills', 'values', 'future'];

  return (
    <div id='header' className='mx-auto max-w-[90%]'>
      <div className='justify-between items-center cursor-pointer md:flex'>
        <div className='text-center'>
          <a href='https://fwywd.com/' target={'_blank'} rel='noreferrer'>
            <Image
              className='hover:opacity-70'
              src='/logo.png'
              alt='ヘッダーロゴ'
              width={150}
              height={75}
            />
          </a>
        </div>
        <div className='hidden justify-between md:flex'>
          {menus.map(function (menu, index) {
            return (
              <nav key={index} className='mx-5 font-bold hover:text-font-green uppercase'>
                <Scroll to={menu} smooth={true} duration={600}>
                  {menu}
                </Scroll>
              </nav>
            );
          })}
        </div>
      </div>
      <HamburgerMenu />
    </div>
  );
};
