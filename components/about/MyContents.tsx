import Image from 'next/image';

const Content: {
  Subtitle1: string;
  Text1: string;
  Subtitle2: string;
  Text2: string;
  Subtitle3: string;
  Text3: string;
} = {
  Subtitle1: '趣味',
  Text1:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  Subtitle2: '好きな食べ物',
  Text2: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  Subtitle3: `性格`,
  Text3: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

export const MyAboutContens = () => {
  return (
    <div className='px-10 grid grid-cols-1 text-center pt-20 lg:mx-36 lg:grid-cols-3'>
      <div className='pt-10 lg:mx-20'>
        <Image src='/about-1.png' alt='趣味画像' width={190} height={160} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{Content.Subtitle1}</h1>
        <p className='mt-5 text-left'>{Content.Text1}</p>
      </div>
      <div className='pt-10 lg:mx-20'>
        <Image src='/about-2.png' alt='趣味画像' width={190} height={160} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{Content.Subtitle2}</h1>
        <p className='mt-5 text-left'>{Content.Text2}</p>
      </div>
      <div className='pt-10 lg:mx-20'>
        <Image src='/about-3.png' alt='趣味画像' width={190} height={160} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{Content.Subtitle3}</h1>
        <p className='mt-5 text-left'>{Content.Text3}</p>
      </div>
    </div>
  );
};
