import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Future } from '../components/future/futureme';
import { FuuterBar } from '../components/pagefooter/PageFooterBar';
import { HeaderMain } from '../components/pageheader/Hero';
import { Header } from '../components/pageheader/pagehead';
import { ShareButton } from '../components/ShareButton';
import { Skill } from '../components/skills/skill';
import { Value } from '../components/values/Value';
import { PageHead } from '../components/_document';
import { About } from '../components/about/aboutme';
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
