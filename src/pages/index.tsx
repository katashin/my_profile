import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { HeaderMain } from '../components/Pageheader/Hero';
import { Header } from '../components/Pageheader/pagehead';
import { ShareButton } from '../components/ShareButton';
import { PageHead } from '../components/_document';
import { About } from '../components/about/about';
import { FuuterBar } from '../components/footer/PageFooterBar';
import { Future } from '../components/future/future';
import { Skill } from '../components/skills/skill';
import { Value } from '../components/values/Value';
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
