import { FutureTitle } from "../MyTitileList"
import Image from "next/image"

const text: string = 'テキストテキストテキストvテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストvテキストテキストテキストテキストテキストテキストvテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'

export const Future = () => {
  return (
    <div className="bg-future bg-100% pb-20">
      <div className="mx-10 md:flex justify-center pt-96 px-64">
        <div className="mr-20">
          <FutureTitle />
          <div className="mt-5">{ text }</div>
        </div>
        <Image src='/future.png' width={2000} height={1200} alt="３年後の画像"/>
      </div>
    </div>
  )
}