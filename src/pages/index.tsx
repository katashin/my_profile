import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { PageHead } from '../components/_document';
import { Header } from '../components/header/Pageheader';
import { HeaderMain } from '../components/header/PageMain';
import { About } from '../components/about/about';
import { Skill } from '../components/skill/skill';
import { Value } from '../components/value/value';
import { Future } from '../components/future/future';
import { FuuterBar } from '../components/futter/futter';
import { ShareButton } from '../components/ShareButton';

const Home: NextPage = () => {
  return (
    <div className='contents tracking-wider text-sm leading-5'>
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
