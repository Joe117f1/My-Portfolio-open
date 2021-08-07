import { useState, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const router = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const addActiveClass = (path) => {
    return (router.pathname === path) ? classes.marked : '';
  }

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href='/'>
            <a >Yoav Hirshberg</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li >
              <Link href='/about' >
                <a className={addActiveClass('/about')}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/works'>
                <a className={addActiveClass('/works')}>Works</a>
              </Link>
            </li>
            <li >
              <Link href='/contact'>
                <a className={addActiveClass('/contact')}>Contact</a>
              </Link>
            </li>
          </ul>
          <button className={classes.btn} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </header>
      {isMobileMenu && <MobileMenu onToggleMenu={toggleMobileMenu} />}
    </Fragment>
  );
}

export default MainNavigation;
