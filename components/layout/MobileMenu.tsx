import Link from 'next/link';
import classes from './MobileMenu.module.css';

interface Props {
  onToggleMenu: () => void;
}

export const MobileMenu = ({ onToggleMenu }: Props) => {
  //TODO: extract li components
  return (
    <main className={classes.menu} onClick={onToggleMenu}>
      <ul>
        <li onClick={onToggleMenu}>
          <Link href='/about'>About</Link>
        </li>
        <li onClick={onToggleMenu}>
          <Link href='/create'>Create</Link>
        </li>
        <li onClick={onToggleMenu}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li onClick={onToggleMenu}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </main>
  );
};
