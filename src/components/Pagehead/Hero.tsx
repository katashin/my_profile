import Image from 'next/image';
import Link from 'next/link';

export const HeaderMain = () => {
  const MainTitle: string = '自己紹介';
  const SubTitle: string = '片山真介';

  return (
    <div className='bg-header-green'>
      <div className='justify-between pt-4 text-center xl:flex'>
        <div className='items-center my-auto mx-auto text-center'>
          <p className='pb-5 text-4xl font-bold text-white xl:text-5xl'>{MainTitle}</p>
          <p className='text-2xl text-white xl:text-4xl'>{SubTitle}</p>
        </div>
        <div className='py-10 px-10 xl:mr-20'>
          <Image src={'/hero.png'} width={800} height={700} alt='メイン画像'></Image>
        </div>
      </div>
    </div>
  );
};
