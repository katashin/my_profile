import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  const menus: string[] = ['about', 'skills', 'values', 'future'];
  const [openMenu, setOpenMenu] = useState(false);

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
    </div>

    //     {/* ハンバーガーメニュー */}
    //     <button
    //       onClick={() => setOpenMenu(true)}
    //       className='absolute top-2 left-2 flex-initial md:hidden'
    //     >
    //       <Image src='/hangmenu.png' alt='menu' width={30} height={30}></Image>
    //     </button>
    //     {openMenu ? (
    //       <div className='absolute top-0 left-1 z-10 flex-initial bg-white md:hidden'>
    //         {menus.map(function (value, index) {
    //           return (
    //             <>
    //               <Scroll to={value} smooth={true} duration={600}>
    //                 <div className='w-16 border-b'>
    //                   <button
    //                     onClick={() => setOpenMenu(false)}
    //                     className='font-bold hover:text-font-green uppercase cursor-pointer'
    //                   >
    //                     {value}
    //                   </button>
    //                 </div>
    //               </Scroll>
    //             </>
    //           );
    //         })}
    //       </div>
    //     ) : null}
    //   </div>
    // </div>
  );
};
