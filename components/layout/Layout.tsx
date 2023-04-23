import { ReactNode } from 'react';
import { MainNavigation } from './MainNavigation';
import { Footer } from './Footer';
import classes from './Layout.module.css';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <MainNavigation />
      <div className={classes.bgcBanner}> </div>
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};
