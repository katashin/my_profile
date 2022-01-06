import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Future } from '../components/Future/FutureMe';
import { FuuterBar } from '../components/Pagefooter/PageFooterBar';
import { HeaderMain } from '../components/Pageheader/Hero';
import { Header } from '../components/Pageheader/Pagehead';
import { ShareButton } from '../components/ShareButton';
import { Skill } from '../components/SkillsFile/Skill';
import { Value } from '../components/Values/Value';
import { PageHead } from '../components/_document';
import { About } from '../components/about/AboutMe';
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
