import { Fragment } from 'react';
import Head from 'next/head';
import MyStackContent from '../../components/about-content/MyStackContent';

const MyStack = () => {
  return (
    <Fragment>
      <Head>
        <title>My Tech Stack</title>
        <meta
          name='description'
          content='my page description...'
        />
      </Head>
      <MyStackContent />
    </Fragment>
  );
};

export default MyStack;