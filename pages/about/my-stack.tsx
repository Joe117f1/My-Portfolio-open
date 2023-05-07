import Head from 'next/head';
import { MyStackContent } from '../../components/about-content/MyStackContent';

const MyStack = () => {
  return (
    <>
      <Head>
        <title>My Tech Stack</title>
        <meta
          name='description'
          content='Meta tag content for the MyStack page...'
        />
      </Head>
      <MyStackContent />
    </>
  );
};

export default MyStack;
