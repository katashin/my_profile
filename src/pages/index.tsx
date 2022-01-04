import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { About } from '../components/About/myabout';
import { Future } from '../components/Future/future';
import { FuuterBar } from '../components/Pagefutter/Pagefutter';
import { HeaderMain } from '../components/Pageheader/PageMain';
import { Header } from '../components/Pageheader/Pageheader';
import { ShareButton } from '../components/ShareButton';
import { Skill } from '../components/Skill/skill';
import { Value } from '../components/Value/value';
import { PageHead } from '../components/_document';
// import styles from '..../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='contents text-sm tracking-wider leading-5'>
      <PageHead />
      <Header />
      <HeaderMain />
      <About />
      <Skill />
      <Value />
      <Future />
      <FuuterBar />
      <ShareButton />
    </div>
  );
};

export default Home;
