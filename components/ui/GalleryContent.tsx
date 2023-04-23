import { ProjectList } from '../projects/ProjectList';
import { HeroWord } from './HeroWord';
import classes from './GalleryContent.module.css';
import { GellryTypeEnum } from '../../types/enums';
import { ListItem } from '../../types/intefaces';

interface Props {
  data: { galleryTitle: string; galleryType: GellryTypeEnum; items: ListItem[] };
}

export const GalleryContent = ({ data }: Props) => {

  const { galleryType, galleryTitle, items } = data;
  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h1>{galleryTitle}</h1>
      </div>
      <div className={classes.grid}>
        <ProjectList projects={items} type={galleryType} />
      </div>
      <i className={classes.contact}>
        <HeroWord path={'/contact'} text={'contact me'} fontSize={3} />
      </i>
    </main>
  );
};
