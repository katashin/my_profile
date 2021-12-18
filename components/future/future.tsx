import { FutureTitle } from "../MyTitileList"
import Image from "next/image"

const text: string = 'テキストテキストテキストvテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'

export const Future = () => {
  return (
    <div className="bg-future bg-100% -mt-56 pb-10">
      <div className="mx-10 md:flex justify-center pt-64 px-64">
        <div className="mr-20">
          <FutureTitle />
          <div className="mt-5">{ text }</div>
        </div>
        <Image src='/future.png' width={800} height={500} alt="３年後の画像"/>
      </div>
    </div>
  )
}