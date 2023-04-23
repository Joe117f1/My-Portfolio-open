import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { Modal } from './Modal';
import { HeroWord } from './HeroWord';
import classes from './ProjectDetailsModal.module.css';

interface Props {
  description: string;
  id: string;
  img: string;
  linkToCode?: string;
  linkToProject?: string;
  onCloseModal: () => void;
  title: string;
}

export const ProjectDetailsModal = ({
  description,
  img,
  linkToCode,
  linkToProject,
  onCloseModal,
  title,
}: Props) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <section className={classes.container}>
        <div className={classes.img}>
          <Image src={img} alt={title} width={1200} height={950} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        {linkToProject && (
          <a target='_blank' href={linkToProject} rel='noopener noreferrer'>
            <i className={classes.btn}>
              Go to project {''}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </i>
          </a>
        )}
        {linkToCode && (
          <a target='_blank' href={linkToCode} rel='noopener noreferrer'>
            <i className={classes.btn}>
              watch the code {''}
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        )}
        {!linkToCode && ( //TODO: move to reuseable strings
          <HeroWord path={'/contact'} fontSize={1} text={"Let's do it!"} />
        )}
      </section>
    </Modal>
  );
};
