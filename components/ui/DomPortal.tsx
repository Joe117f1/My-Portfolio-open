import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector: string;
  children: ReactNode;
}

export const DomPortal = ({ children, selector }: Props) => {
  const ref = useRef<any>(); //TODO: change any type
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};
