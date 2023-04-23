import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SloganWord } from '../ui/SloganWord';

export const SloganReality = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const openGallery = () => {
    setIsClicked(true);
    router.push('/create');
  };

  useEffect(() => {
    return setIsClicked(false);
  }, []);
//TODO: change hard-coded strings;
  return <SloganWord keword={{ word: 'reality', type: 'let' }} mark={';'} />;
};
