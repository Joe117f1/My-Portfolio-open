import Link from 'next/link';
import classes from './MobileMenu.module.css';

const MobileMenu = (props) => {
  return (
    <main className={classes.menu} onClick={props.onToggleMenu}>
      <ul>
        <li onClick={props.onToggleMenu}>
          <Link href='/about' >About</Link>
        </li>
        <li onClick={props.onToggleMenu}>
          <Link href='/works' >Works</Link>
        </li>
        <li onClick={props.onToggleMenu}>
          <Link href='/contact' >Contact</Link>
        </li>
      </ul>
    </main>
  );
};

export default MobileMenu;