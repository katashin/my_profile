import { TwitterShareButton, FacebookShareButton, LineShareButton, HatenaShareButton, TwitterIcon, FacebookIcon, LineIcon, HatenaIcon } from "react-share";

export const ShareButton = () => {
  return (
    <div className="py-2 fixed bottom-0 z-10 text-center justify-center w-screen grid grid-cols-4 bg-gray-50">
      <div className="hover:opacity-70">
        <TwitterShareButton url="https://my-profile-eta.vercel.app/" title="【fwywd課題】初学者がReact | Next.js | TypeScript |Tailwind CSS でポートフォリを作成 #fwywd">
          <TwitterIcon size={50} round={true} />
        </TwitterShareButton>
      </div>
      <div className="hover:opacity-70">
        <FacebookShareButton url="https://my-profile-eta.vercel.app/" quote="【fwywd課題】初学者がReact | Next.js | TypeScript |Tailwind CSS でポートフォリを作成 #fwywd">
          <FacebookIcon size={50} round={true} />
        </FacebookShareButton>
      </div>
      <div className="hover:opacity-70">
        <LineShareButton url="https://my-profile-eta.vercel.app/" title="【fwywd課題】初学者がReact | Next.js | TypeScript |Tailwind CSS でポートフォリを作成 #fwywd">
          <LineIcon size={50} round={true} />
        </LineShareButton>
      </div>
      <div className="hover:opacity-70">
        <HatenaShareButton url="https://my-profile-eta.vercel.app/" title="【fwywd課題】初学者がReact | Next.js | TypeScript |Tailwind CSS でポートフォリを作成 #fwywd">
          <HatenaIcon size={50} round={true} />
        </HatenaShareButton>
      </div>
    </div>
  )
}