import Image from 'next/image';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './ProjectDetailsModal.module.css';

const ProjectDetailsModal = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <section className={classes.container}>
        <div className={classes.img}>
          <Image src={props.img} alt={props.title} width={1200} height={950} />
        </div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a target='_blank' href={props.linkToProject} rel='noopener noreferrer'>
          <i className={classes.btn}>Go to project {''}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </i>
        </a>
        <a target='_blank' href={props.linkToCode} rel='noopener noreferrer'>
          <i className={classes.btn} >watch the code {''}
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </a>
      </section>
    </Modal>
  );
};

export default ProjectDetailsModal;
