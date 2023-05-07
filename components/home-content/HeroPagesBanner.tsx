import { Parallax } from 'react-scroll-parallax';

import { SloganVision } from './SloganVision';
import { SloganArrow } from './SloganArrow';
import { SloganReality } from './SloganReality';
import classes from './HeroPagesBanner.module.css';

export const HeroPagesBanner = () => {
  return (
    <div className={classes.container}>
      <Parallax x={[-70, 0]} tagOuter='figure'>
        <SloganVision />
      </Parallax>
      <SloganArrow />
      <Parallax x={[70, 0]} tagOuter='figure'>
        <SloganReality />
      </Parallax>
    </div>
  );
};
