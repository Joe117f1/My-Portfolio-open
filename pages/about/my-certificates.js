import { Fragment } from 'react';
import Head from 'next/head';
import MyCertificatesContent from '../../components/about-content/MyCertificatesContent';

const MyCertificates = () => {
  return (
    <Fragment >
      <Head>
        <title>My relevant certificates</title>
        <meta
          name='description'
          content='my page description...'
        />
      </Head>
      <MyCertificatesContent />
    </Fragment>
  );
};

export default MyCertificates;
