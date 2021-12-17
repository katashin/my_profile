import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header/Header';
import { HeaderMain } from '../components/header/HeaderMain';
import { About } from '../components/about/about';
import { Future } from '../components/future/feature';

const Home: NextPage = () => {
  return (
    <div className='contents tracking-wider text-sm leading-5'>
      <Header />
      <HeaderMain />
      <About />
      <Future />
    </div>
  )
};

export default Home;
