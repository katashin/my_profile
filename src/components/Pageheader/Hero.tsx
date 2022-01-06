import Image from 'next/image';
import Link from 'next/link';

export const HeaderMain = () => {
  const MainTitle: string = '自己紹介';
  const SubTitle: string = '片山真介';

  return (
    <div className='bg-header-green'>
      <div className='grid pt-2 text-center md:grid-cols-2'>
        <div className='my-auto font-bold text-white'>
          <h2 className='text-4xl md:text-5xl'>{MainTitle}</h2>
          <h3 className='pt-2 text-2xl md:text-3xl'>{SubTitle}</h3>
        </div>
        <div className='py-5 px-10'>
          <Image src={'/hero.png'} width={800} height={700} alt='メイン画像' />
        </div>
      </div>
    </div>
  );
};
