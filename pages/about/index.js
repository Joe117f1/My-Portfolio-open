import { Fragment } from 'react';
import Head from 'next/head';
import AboutContent from '../../components/about-content/AboutContent';

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>About Myself</title>
                <meta
                    name='description'
                    content='my page description...'
                />
            </Head>
            <AboutContent />
        </Fragment>
    );
}

export default About;