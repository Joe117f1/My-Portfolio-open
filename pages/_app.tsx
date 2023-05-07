import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Layout } from '../components/layout/Layout';
import '../styles/globals.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ParallaxProvider>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:title' content='Meta tag title...' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://yoavhirshberg.io' />
          <meta
            property='og:image'
            content='/assets/img/site-img/cover-photo.jpg'
          />
          <meta property='og:description' content='Meta tag content' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
};

export default MyApp;
