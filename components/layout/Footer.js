import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a target='_blank' href='https://github.com/Joe117f1' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target='_blank' href='https://www.linkedin.com/in/yoav-hirshberg-68227015a/' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <p>Copyright © 2021 Yoav Hirshberg. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
