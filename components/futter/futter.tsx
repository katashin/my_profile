import Image from "next/image"

const text: {create: string, name: string, conponent: string} = {
  create: 'created by',
  name: '片山 真介',
  conponent: '© 2021 Shinsuke Katayama'
}

export const FuuterBar = () => {
  return (
    <div className='bg-futter-black text-white text-center'>
      <div className="py-10">
        <p className='uppercase'>{text.create} <span className="text-xl font-bold">{text.name}</span></p>
        <p className="py-10 hover:opacity-75"><Image src='/logo_white.png' width={100} height={120} alt="フッター画像" /></p>
        <div className="flex justify-center pb-10">
          <div className="pr-5 hover:opacity-75">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count='false' target={'_blank'} data-text='シェアありがとうございます。片山真介と申します。宜しくお願いします。' data-hashtags='fwywd'>
              <Image src='/twitter.png' width={30} height={30} alt="フッター画像" />
              <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
            </a>
          </div>
          <div className="hover:opacity-75">
            <Image src='/facebook.png' width={30} height={30} alt="フッター画像" />
          </div>
        </div>
        <p>{text.conponent}</p>
      </div>
    </div>
  )
}