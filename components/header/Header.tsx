import Link from 'next/link';
import Image from 'next/image';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
  const menuLists: string[] = ['about', 'skills', 'values', 'future'];

  return (
    <div id='header' className='px-2 bg-white border-b-2'>
      <div className='md:flex justify-between'>
        <div className='text-center'>
          <Image
            className='hover:opacity-75'
            src='/logo.png'
            alt='ヘッダーロゴ'
            width={150}
            height={80}
          />
        </div>
        <div className='mx-5 mb-3 flex justify-between'>
          {menuLists.map(function (list) {
            return (
              <ul className='my-auto'>
                <Scroll to={list} smooth={true} duration={600}>
                  <li
                    key={list}
                    className='py-auto md:px-5 uppercase font-bold hover:text-font-green'
                  >
                    {list}
                  </li>
                </Scroll>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
