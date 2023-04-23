import { GellryTypeEnum } from '../../types/enums';
import { ListItem } from '../../types/intefaces';
import { ProjectItem } from './ProjectItem';

interface Props {
  projects: ListItem[];
  type: GellryTypeEnum;
}

export const ProjectList = ({ projects, type }: Props) => {
  return (
    <>
      {projects.map((project: any) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          language={project.language}
          description={project.description}
          linkToProject={project.linkToProject}
          gitHubLink={project.gitHubLink}
          type={type}
        />
      ))}
    </>
  );
};
