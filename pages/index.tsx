import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header/Header';
import { HeaderMain } from '../components/header/HeaderMain';
import { About } from '../components/about/about';
import { Value } from '../components/value/value';
import { Future } from '../components/future/future';
import { FuuterBar } from '../components/futter/futter';

const Home: NextPage = () => {
  return (
    <div className='contents tracking-wider text-sm leading-5'>
      <Header />
      <HeaderMain />
      <About />
      <Value />
      <Future />
      <FuuterBar/>
    </div>
  )
};

export default Home;
