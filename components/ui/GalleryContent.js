import ProjectList from '../../components/projects/ProjectList';
import HeroWord from './HeroWord';
import classes from './GalleryContent.module.css';

const GalleryContent = (props) => {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        My Projects
      </h1>
      <div className={classes.grid}>
        <ProjectList projects={props.projects} />
      </div>
      <i className={classes.contact}>
        <HeroWord path={'/contact'} text={'contact me'} fontSize={3} />
      </i>
    </main>
  );
};

export default GalleryContent;
