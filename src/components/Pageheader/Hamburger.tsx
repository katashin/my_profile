import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

export const HamburgerMenu = () => {
  const menus: string[] = ['about', 'skills', 'values', 'future'];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button onClick={() => setOpenMenu(true)} className='absolute top-5 left-4 md:hidden'>
        <Image src='/hangmenu.png' alt='menu' width={30} height={30}></Image>
      </button>
      {openMenu ? (
        <div className='absolute top-0 left-1 z-10 flex-initial bg-white md:hidden'>
          {menus.map(function (menu, index) {
            return (
              <>
                <Scroll to={menu} smooth={true} duration={600}>
                  <div className='w-16 border-b'>
                    <button
                      onClick={() => setOpenMenu(false)}
                      className='font-bold hover:text-font-green uppercase cursor-pointer'
                    >
                      {menu}
                    </button>
                  </div>
                </Scroll>
              </>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
