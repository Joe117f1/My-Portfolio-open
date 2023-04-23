import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import classes from './HeroWord.module.css';

interface Props {
  path: string;
  text: string;
  fontSize?: number;
  time?: number;
}

export const HeroWord = ({ path, text, fontSize = NaN, time = 0 }: Props) => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  let wordFontSize;
  if (fontSize) {
    wordFontSize = fontSize;
  }

  const BASE_CLASSES = fontSize
    ? `${classes.container} ${classes.fontSize}`
    : classes.container;
  const WELCOME_CLASSES = fontSize
    ? `
    ${classes.container} ${classes.containerStart} ${classes.fontSize}`
    : `${classes.container} ${classes.containerStart}`;

  const [style, setStyle] = useState(BASE_CLASSES);
  let cssClasses;

  const setClassTimer = useCallback((classes: string, duration: number) => {
    const timerId = setTimeout(() => {
      cssClasses = classes;
      setStyle(cssClasses);
    }, duration);
    return timerId;
  }, []);

  useEffect(() => {
    if (isFirstMount) {
      if (isFirstMount) {
        setClassTimer(WELCOME_CLASSES, time);
        setClassTimer(BASE_CLASSES, time + 500);
      }
    }
    return () => {
      setIsFirstMount(false);
    };
  }, [isFirstMount, WELCOME_CLASSES, BASE_CLASSES, setClassTimer, time]);

  return (
    <div className={style}>
      <Link href={path}>{text}</Link>
    </div>
  );
};
