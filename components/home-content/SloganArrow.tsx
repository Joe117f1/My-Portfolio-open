import { SloganWord } from '../ui/SloganWord';
import classes from './SloganArrow.module.css';

export const SloganArrow = () => {
  return (
    <div className={classes.center}>
      <SloganWord keword={{ word: '=>', type: 'const' }} />
    </div>
  );
};
