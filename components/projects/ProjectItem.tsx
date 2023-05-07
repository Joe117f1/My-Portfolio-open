import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { ProjectDetailsModal } from '../ui/ProjectDetailsModal';
import { Card } from '../ui/Card';
import classes from './ProjectItem.module.css';
import { ListItem } from '../../types/intefaces';
import { GellryTypeEnum } from '../../types/enums';

interface Props extends ListItem {
  type: GellryTypeEnum;
}
export const ProjectItem = (props: Props) => {
  const { description, gitHubLink, id, language, linkToProject, title, type } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    if (type === GellryTypeEnum.PROJECTS) {
      setIsProject(true);
    }
  }, [type]);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const imagePath = isProject ? title : 'works-modal';
  const modalImage = `/assets/img/modal-img/${imagePath}.jpg`;
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image
            src={`/assets/img/card-img/${language}.jpg`}
            alt={title}
            width={1600}
            height={900}
          />
        </div>
        <h2>{title}</h2>
        {isProject && <h3>{language}</h3>}
        <p className={classes.ellipsis}>{description}</p>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={onOpenModal}>
            more details
          </button>

          {isModalOpen && (
            <ProjectDetailsModal
              onCloseModal={closeModalHandler}
              id={id}
              img={modalImage}
              title={title}
              description={description}
              linkToProject={linkToProject}
              linkToCode={gitHubLink}
            />
          )}
          {isProject && (
            <a target='_blank' href={linkToProject} rel='noopener noreferrer'>
              <i className={classes.btn}>
                Go to project {''}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </i>
            </a>
          )}

          {isProject && (
            <a target='_blank' href={gitHubLink} rel='noopener noreferrer'>
              <i className={classes.btn}>
                watch the code {''}
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
