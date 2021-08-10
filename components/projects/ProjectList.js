import { Fragment } from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = (props) => {
  return (
    <Fragment >
      {props.projects.map(project => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          lang={project.language}
          description={project.description}
          linkToProject={project.linkToProject}
          gitHubLink={project.gitHubLink}
        />
      ))}
    </Fragment>
  );
};

export default ProjectList;