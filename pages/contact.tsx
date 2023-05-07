import Head from 'next/head';
import { ContactForm } from '../components/contact-form/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name='description'
          content='Meta tag content for the ContactPage page...'
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
