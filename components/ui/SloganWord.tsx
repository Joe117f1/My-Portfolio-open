import React from 'react';
import classes from './SloganWord.module.css';

type TextCodeType = 'const' | 'let';

interface SloganProps {
  keword: { word: string; type: TextCodeType };
  mark?: string;
}

export const SloganWord = ({ keword, mark }: SloganProps) => {
  const { word, type } = keword;
  const endMark = mark && <span className={classes.mark}>{mark}</span>;
  return (
    <div className={classes[type]}>
      {word}
      {endMark}
    </div>
  );
};
