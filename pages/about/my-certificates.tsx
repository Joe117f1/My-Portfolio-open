import Head from 'next/head';
import { MyCertificatesContent } from '../../components/about-content/MyCertificatesContent';

const MyCertificates = () => {
  return (
    <>
      <Head>
        <title>My relevant certificates</title>
        <meta
          name='description'
          content='Meta tag content for the Certification page...'
        />
      </Head>
      <MyCertificatesContent />
    </>
  );
};

export default MyCertificates;
