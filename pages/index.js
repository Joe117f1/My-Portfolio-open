import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-content/Hero';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Yoav Hirshberg</title>
        <meta
          name='description'
          content='my page description...'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </Fragment>
  );
};

export default HomePage;