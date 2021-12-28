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
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const item2: Valuestyle = {
  picture: '/value2.png',
  pictureTitle: '価値観０2画像',
  title: '価値観０２',
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const item3: Valuestyle = {
  picture: '/value3.png',
  pictureTitle: '価値観０3画像',
  title: '価値観０３',
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
}

const items: Valuestyle[] = [item1, item2]

export const MyValueContens = () => {
  return (
    <div className='relative bg-white rounded-xl grid grid-cols-1 text-center xl:mt-10 xl:mx-56 xl:grid-cols-3'>
      {console.log(items)}
      {items.map((item) => {
        return(
          <div className='pt-10 lg-mx-20 border-b-4 border-line lg:px-8 lg:border-r-4 lg:border-b-0'>
            <Image src={item.picture} alt={item.pictureTitle} width={190} height={190} />
            <h1 className='text-font-green font-bold text-2xl mt-5'>{item.title}</h1>
            <p className='mt-5 text-left'>{item.text}</p>
          </div>
        )
      })}
      <div className='pt-10 lg-mx-20 lg:px-8'>
        <Image src={item3.picture} alt={item3.pictureTitle} width={190} height={190} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{item3.title}</h1>
        <p className='mt-5 mb-10 text-left'>{item3.text}</p>
      </div>
    </div>
  );
};
