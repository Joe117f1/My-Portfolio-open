import { Fragment } from 'react';
import Image from 'next/image';
import { HeroWord } from '../ui/HeroWord';
import classes from './Hero.module.css';

export const Hero = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <HeroWord path={'/about'} text={'Imagine'} time={600} />
          <HeroWord path={'/contact'} text={'Build'} time={1100} />
          <HeroWord path={'/create'} text={'Share'} time={1600} />
        </div>
        <div className={classes.imgContainer}>
          <Image
            src='/assets/img/site-img/cover-photo.jpg'
            alt='cover photo'
            width={1061}
            height={1489}
            layout='responsive'
          />
        </div>
        <div className={classes.imgContainerMobile}>
          <Image
            src='/assets/img/site-img/cover-photo2.jpg'
            alt='cover photo'
            width={1057}
            height={1176}
            layout='responsive'
          />
        </div>
      </div>
    </Fragment>
  );
};
