import Image from "next/image";
import { MyAboutContens } from "./MyContents";
import { MainTitle } from "../MyTitileList";

export const About = () => {
  return (
    <div className="pb-10 px-3 xl:bg-about xl:bg-100% xl:pb-32">
      <MainTitle JaTitle="私について" EgTitle="about" />
      <div className='grid grid-cols-1 text-center xl:mt-10 xl:mx-56 xl:grid-cols-3'>
        <MyAboutContens subtitle='趣味' src='/about-1.png' alt='趣味画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAboutContens>
        <MyAboutContens subtitle='好きな食べ物' src='/about-2.png' alt='食べ物画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAboutContens>
        <MyAboutContens subtitle='性格' src='/about-3.png' alt='性格画像'>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </MyAboutContens>
      </div>
    </div>
  )
}