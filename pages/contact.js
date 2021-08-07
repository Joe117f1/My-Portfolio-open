import { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from '../components/contact-form/ContactForm';
import ContactHero from '../components/contact-form/ContactHero';

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta
                    name='description'
                    content='my page description...'
                />
            </Head>
            <ContactHero />
            <ContactForm />
        </Fragment>
    );
}

export default ContactPage;