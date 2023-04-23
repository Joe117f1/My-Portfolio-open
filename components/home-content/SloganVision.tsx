import { useRouter } from 'next/router';
import { SloganWord } from '../ui/SloganWord';

export const SloganVision = () => {
  const router = useRouter();
  const openAboutHandler = () => {
    router.push('/about');
  };
//TODO: change hard-coded strings;
  return <SloganWord keword={{ word: 'vision', type: 'let' }} />;
};
