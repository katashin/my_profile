import Link from 'next/link';
import Image from 'next/image';

export const HeaderMain = () => {
  const MainTitle: string = '自己紹介';
  const SubTitle: string = '片山真介';

  return (
    <div className='bg-header-green'>
      <div className='text-center pt-4 xl:flex justify-between'>
        <div className='my-auto mx-auto items-center text-center'>
          <p className='text-white text-4xl xl:text-5xl pb-5 font-bold'>{MainTitle}</p>
          <p className='text-white text-2xl xl:text-4xl'>{SubTitle}</p>
        </div>
        <div className='px-10 xl:mr-20 py-10'>
          <Image src={'/hero.png'} width={800} height={700} alt='メイン画像'></Image>
        </div>
      </div>
    </div>
  );
};
