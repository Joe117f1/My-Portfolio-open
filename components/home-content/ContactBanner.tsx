import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import classes from './ContactBanner.module.css';

export const ContactBanner = () => {
  return (
    <section className={classes.container}>
      <div className={classes.title}>
        <h1>Wanna create something?</h1>
      </div>
      <h2>email are still free :)</h2>
      <div className={classes.contact}>
        <Link href='/contact'>
          <a>
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </Link>
      </div>
    </section>
  );
};
