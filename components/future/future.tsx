import Image from "next/image"
import { MainTitle } from "../MyTitileList"

const text: string = 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'

export const Future = () => {
  return (
    <div className="bg-future bg-no-repeat bg-cover px-3 pt-96 xl:-mt-48 xl:pt-0 xl:bg-100%">
      <div className="xl:flex justify-center xl:pt-64 xl:mx-60">
        <div className="md:mr-20">
          <div className="md:flex justify-start">
            <MainTitle JaTitle="３年後にやりたいこと" EgTitle="future" />
          </div>
          <div className="my-5">{ text }</div>
        </div>
        <div className="text-center xl:mb-10">
          <Image src='/future.png' width={1000} height={700} alt="３年後の画像" objectFit="cover"/>
        </div>
      </div>
    </div>
  )
}