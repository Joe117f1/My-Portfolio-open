import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a target='_blank' href='https://github' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.linkedin.com'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://stackoverflow'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
      </ul>
      <p>Copyright © 2021 Yoav Hirshberg. All rights reserved.</p>
    </footer>
  );
};
