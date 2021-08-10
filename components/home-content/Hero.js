import { Fragment } from 'react';
import Image from 'next/image';
import HeroWord from '../ui/HeroWord';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <HeroWord path={'/about'} text={'Imagine'} />
          <HeroWord path={'/works'} text={'Build'} />
          <HeroWord path={'/contact'} text={'Share'} />
        </div>
        <div className={classes.img}>
          <Image
            src='/assets/img/site-img/cover-photo.jpg'
            alt='cover photo'
            width={1061}
            height={1489}
          />
        </div>
      </div>
    </Fragment >
  );
};

export default Hero;
