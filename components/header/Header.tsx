import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  const menuLists: string[] = ['about', 'skills', 'values', 'future'];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div id='header' className='px-2 bg-white border-b-2'>
      <div className='justify-between md:flex'>
        <div className='text-center'>
          <a href='https://fwywd.com/' target={'_blank'} rel='noreferrer'>
            <Image
              className='hover:opacity-75'
              src='/logo.png'
              alt='ヘッダーロゴ'
              width={150}
              height={80}
            />
          </a>
        </div>
        <div className='flex justify-between mx-5 mb-3'>
          {menuLists.map(function (value, index) {
            return (
              <ul key={index} className='hidden my-auto cursor-pointer md:flex'>
                <Scroll to={value} smooth={true} duration={600}>
                  <li className='font-bold hover:text-font-green uppercase md:px-5'>
                    {value}
                  </li>
                </Scroll>
              </ul>
            );
          })}
        </div>
        {/* ハンバーガーメニュー */}
        <button
          onClick={() => setOpenMenu(true)}
          className='absolute top-2 left-2 flex-initial md:hidden'
        >
          <Image src='/hangmenu.png' alt='menu' width={30} height={30}></Image>
        </button>
        {openMenu ? (
          <div className='absolute top-0 left-1 z-10 flex-initial bg-white md:hidden'>
            {menuLists.map(function (value, index) {
              return (
                <>
                  <Scroll to={value} smooth={true} duration={600}>
                    <div className='w-16 border-b'>
                      <button
                        onClick={() => setOpenMenu(false)}
                        className='font-bold hover:text-font-green uppercase cursor-pointer'
                      >
                        {value}
                      </button>
                    </div>
                  </Scroll>
                </>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
