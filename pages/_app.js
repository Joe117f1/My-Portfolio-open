import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Yoav Hirshberg-fullstack developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://my.website.com" />
        <meta property="og:image" content="/assets/img/site-img/cover-photo.jpg" />
        <meta property="og:description" content="description about me and this website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
