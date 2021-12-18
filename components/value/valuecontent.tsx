import Image from 'next/image';

interface Valuestyle {
  picture: string;
  pictureTitle: string;
  title: string;
  text: string;
}

const item1: Valuestyle = {
  picture: '/value1.png',
  pictureTitle: '価値観０１画像',
  title: '価値観０１',
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const item2: Valuestyle = {
  picture: '/value2.png',
  pictureTitle: '価値観０2画像',
  title: '価値観０２',
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const item3: Valuestyle = {
  picture: '/value3.png',
  pictureTitle: '価値観０3画像',
  title: '価値観０３',
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const items: Valuestyle[] = [item1, item2, item3]

export const MyValueContens = () => {
  return (
    <div className='bg-red-400 mt-5 rounded-xl mx-20 grid grid-cols-1 text-center py-10 lg:mx-72 lg:grid-cols-3'>
      <div className='pt-10 lg-mx-20 border-b-4 border-line lg:border-r-4 lg:border-b-0'>
      <Image src={item1.picture} alt={item1.pictureTitle} width={190} height={190} />
      <h1 className='text-font-green font-bold text-2xl mt-5'>{item1.title}</h1>
      <p className='mt-5 mx-10 mb-10 text-left'>{item1.text}</p>
      </div>
      <div className='pt-10 lg-mx-20 border-b-4 border-line lg:border-r-4 lg:border-b-0'>
      <Image src={item2.picture} alt={item2.pictureTitle} width={190} height={190} />
      <h1 className='text-font-green font-bold text-2xl mt-5'>{item2.title}</h1>
      <p className='mt-5 mx-10 mb-10 text-left'>{item2.text}</p>
      </div>
      <div className='pt-10 lg-mx-20'>
      <Image src={item3.picture} alt={item3.pictureTitle} width={190} height={190} />
      <h1 className='text-font-green font-bold text-2xl mt-5'>{item3.title}</h1>
      <p className='mt-5 mx-10 mb-10 text-left'>{item3.text}</p>
      </div>
    </div>
    
  );
};
{/* {items.map((item) => {
  return (
    <div className='mx-20 grid grid-cols-1 text-center pt-20 lg:mx-36 lg:grid-cols-3'>
      <div className='pt-10 lg-mx-20 border-b-4 border-line lg:border-r-4 lg:border-b-0'>
        <Image src={item.picture} alt={item.pictureTitle} width={190} height={190} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{item.title}</h1>
        <p className='mt-5 text-left'>{item.text}</p>
      </div>
    </div>
)
})} */}
