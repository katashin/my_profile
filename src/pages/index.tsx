import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { HeaderMain } from '../components/Pageheader/PageMain';
import { Header } from '../components/Pageheader/Pageheader';
import { ShareButton } from '../components/ShareButton';
import { PageHead } from '../components/_document';
import { About } from '../components/about/about';
import { FuuterBar } from '../components/futter/futter';
import { Future } from '../components/future/future';
import { Skill } from '../components/skill/skill';
import { Value } from '../components/value/value';
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
