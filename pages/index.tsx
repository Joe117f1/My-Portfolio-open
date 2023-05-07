import Head from 'next/head';
import { Parallax } from 'react-scroll-parallax';

import { Hero } from '../components/home-content/Hero';
import { HeroPagesBanner } from '../components/home-content/HeroPagesBanner';
import { MyStackContent } from '../components/about-content/MyStackContent';
import { ContactBanner } from '../components/home-content/ContactBanner';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Yoav Hirshberg</title>
        <meta
          name='description'
          content='Meta tag content for the HomePage...'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Parallax y={[-20, 20]} tagOuter='figure'>
        <HeroPagesBanner />
      </Parallax>
      <Parallax y={[-10, 0]} tagOuter='figure'>
        <MyStackContent />
      </Parallax>
      <Parallax y={[-80, 60]} tagOuter='figure'>
        <ContactBanner />
      </Parallax>
    </>
  );
};

export default HomePage;
