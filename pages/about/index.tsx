import Head from 'next/head';
import { AboutContent } from '../../components/about-content/AboutContent';

const About = () => {
  return (
    <>
      <Head>
        <title>About Myself</title>
        <meta
          name='description'
          content='Meta tag content for the about page...'
        />
      </Head>
      <AboutContent />
    </>
  );
};

export default About;
