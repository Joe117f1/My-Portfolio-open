import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutText from './AboutText';
import HeroWord from '../ui/HeroWord';
import classes from './AboutContent.module.css';

const AboutContent = () => {
  const [coverPhoto, setCoverPhoto] = useState('/assets/img/site-img/about-photo.jpeg');

  useEffect(() => {
    setTimeout(() => setCoverPhoto('/assets/img/site-img/about-photo2.jpg'), 2000);
  }, [setCoverPhoto]);

  return (
    <Fragment>
      <h1 className={classes.title}>About myself...</h1>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.about}>
            <AboutText />
          </div>
          <div className={classes.linksContainer}>
            <Link href='about/my-stack'>My technological stack</Link>
            <Link href='about/my-certificates'>Certificates</Link>
            <a href='/assets/resume/my-cv.pdf' download>Download cv.pdf</a>
          </div>
        </div>
        <div className={classes.img} >
          <Image src={coverPhoto} alt='about photo' width={2400} height={3200} />
        </div>
        <i>
          <HeroWord path={'/works'} text={'my works'} fontSize={3} />
        </i>
      </div>
    </Fragment>
  );
};

export default AboutContent;
