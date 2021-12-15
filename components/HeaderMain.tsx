import Link from "next/link";
import Image from "next/image";

export const HeaderMain = () => {
  const MainTitle: string = '自己紹介'
  const SubTitle: string = '片山真介'

  return (
    <div className="bg-[#6bc2c3] ">
      <div className="md:flex justify-between">
        <div className="my-auto mx-auto items-center text-center">
          <p className="text-white text-3xl md:text-5xl pb-5 font-bold">{ MainTitle }</p>
          <p className="text-white text-2xl md:text-4xl">{ SubTitle }</p>
        </div>
        <div className="md:mr-20 py-10">
          <Image src={'/hero.png'} width={700} height={700} alt="メイン画像"></Image>
        </div>
      </div>
    </div>
  )
}