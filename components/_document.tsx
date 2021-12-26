import Head from "next/head"

export const PageHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <meta name="description" content="fwywdの一次試験で作成したポートフォリオ課題のサイトです。"/>
      <meta name="keywords" content='fwywd, 一次試験, ポートフォリオ'/>
      <meta property="og:url" content="https://my-profile-eta.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="fwywd 一次試験課題 ポートフォリ作成" />
      <meta property="og:description" content="fwywdの一次試験で作成したポートフォリオ課題のサイトです。" />
      <meta property="og:site_name" content="fwywd 一次試験課題で作成したポートフォリオ" />
      <meta property="og:image" content="https://drive.google.com/file/d/1Q-DsKD18DimlMisHWL0uVLJk0pTiPNfu/view?usp=sharing" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@katashin_3812" />
      <title>My Profile</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
  )
}