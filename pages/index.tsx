import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header';

const Home: NextPage = () => {
  return (
    <div className='contents tracking-wider text-sm leading-5'>
      <Header />
    </div>
  )
};

export default Home;
