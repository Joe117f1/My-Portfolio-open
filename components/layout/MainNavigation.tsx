import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MobileMenu } from './MobileMenu';
import classes from './MainNavigation.module.css';

export const MainNavigation = () => {
  const router = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const addActiveClass = (path: string) => {
    return router.pathname === path ? classes.marked : '';
  };

  const navigateHome = () => {
    router.push('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo} onClick={navigateHome}>
          <Image
            src={'/assets/img/site-img/codeSurfer-frame.png'}
            alt='codeSurfer-logo'
            width={40}
            height={40}
          />
          <a>Yoav Hirshberg</a>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/about'>
                <a className={addActiveClass('/about')}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/create'>
                <a className={addActiveClass('/create')}>Create</a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a className={addActiveClass('/projects')}>Projects</a>
              </Link>
            </li>
            <li>
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
    </>
  );
};
