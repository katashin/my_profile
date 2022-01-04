import Image from 'next/image';
import { MainTitle } from '../titlelist';
import { MyAbout } from './abouttext';

export const About = () => {
  return (
    <div className='px-3 pb-10 xl:pb-32 xl:bg-100% xl:bg-about'>
      <MainTitle JaTitle='私について' EgTitle='about' />
      <div className='grid grid-cols-1 text-center xl:grid-cols-3 xl:mx-56 xl:mt-10'>
        <MyAbout subtitle='趣味' src='/about-1.png' alt='趣味画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAbout>
        <MyAbout subtitle='好きな食べ物' src='/about-2.png' alt='食べ物画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAbout>
        <MyAbout subtitle='性格' src='/about-3.png' alt='性格画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAbout>
      </div>
    </div>
  );
};
