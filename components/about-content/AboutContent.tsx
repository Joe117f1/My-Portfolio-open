import Image from 'next/image';
import Link from 'next/link';
import { AboutText } from './AboutText';
import { HeroWord } from '../ui/HeroWord';
import classes from './AboutContent.module.css';

const IMG1 = '/assets/img/site-img/about-photo-2.jpg';

export const AboutContent = () => {
  return (
    <>
      <h1 className={classes.title}>About myself...</h1>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.about}>
            <AboutText />
          </div>
          <div className={classes.linksContainer}>
            <Link href='about/my-stack'>My technological stack</Link>
            <Link href='about/my-certificates'>Certificates</Link>
            <a href='/assets/resume/Yoav-Hirshberg_CV.pdf' download>
              Download cv.pdf
            </a>
          </div>
        </div>
        <div className={classes.img}>
          <Image src={IMG1} alt='about photo' width={2400} height={3200} />
        </div>
        <i>
          <HeroWord path={'/create'} text={'create'} fontSize={3} />
        </i>
      </div>
    </>
  );
};
