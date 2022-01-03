import Link from 'next/link';
import Image from 'next/image';
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react';

export const Header = () => {
  const menuLists: string[] = ['about', 'skills', 'values', 'future'];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div id='header' className='px-2 bg-white border-b-2'>
      <div className='md:flex justify-between'>
        <div className='text-center'>
          <a href="https://fwywd.com/" target={'_blank'}>
            <Image
              className='hover:opacity-75'
              src='/logo.png'
              alt='ヘッダーロゴ'
              width={150}
              height={80}
            />
          </a>
        </div>
        <div className='mx-5 mb-3 flex justify-between'>
          {menuLists.map(function (value, index) {
            return (
              <ul className='hidden my-auto cursor-pointer md:flex'>
                <Scroll to={value} smooth={true} duration={600}>
                  <li
                    key={index}
                    className='py-auto md:px-5 uppercase font-bold hover:text-font-green'
                  >
                    {value}
                  </li>
                </Scroll>
              </ul>
            );
          })}
        </div>
        {/* ハンバーガーメニュー */}
        <button onClick={() => setOpenMenu(true)} className='flex-initial absolute top-2 left-2 md:hidden'>
          <Image src='/hangmenu.png' alt='menu' width={30} height={30}></Image>
        </button>
        {openMenu ? (
          <div className='flex-initial absolute top-0 left-1 bg-white z-10 md:hidden'>
            {menuLists.map(function(value, index){
              return (
                <>
                  <Scroll to={value} smooth={true} duration={600}>
                    <div className='w-16 border-b'>
                      <button onClick={() => setOpenMenu(false)} className='font-bold uppercase cursor-pointer hover:text-font-green'>{value}</button>
                    </div>
                  </Scroll>
                </>
              )
            })}
          </div>
        ):null}
      </div>
    </div>
  );
};
