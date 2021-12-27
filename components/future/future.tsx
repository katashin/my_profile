import Image from "next/image"
import { MainTitle } from "../MyTitileList"

const text: string = 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'

export const Future = () => {
  return (
    <div className="bg-future bg-no-repeat bg-cover px-3 pt-96 md:-mt-48 md:pt-0 md:bg-100%">
      <div className="md:flex justify-center md:pt-64 md:mx-60">
        <div className="md:mr-20">
          <div className="md:flex justify-start">
            <MainTitle JaTitle="３年後にやりたいこと" EgTitle="future" />
          </div>
          <div className="my-5">{ text }</div>
        </div>
        <div className="md:mb-10">
          <Image src='/future.png' width={2000} height={1200} alt="３年後の画像" objectFit="cover"/>
        </div>
      </div>
    </div>
  )
}