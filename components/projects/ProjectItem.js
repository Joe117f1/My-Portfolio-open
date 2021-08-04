import { useState } from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './ProjectItem.module.css';

const ProjectItem = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpenModal = () => {
        setIsModalOpen(true);
    };

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const modalImage = `/assets/img/modal-img/${props.title}.jpg`;

    return (
        <Card>
            <div className={classes.container}>
                <div className={classes.img}>
                    <Image src={`/assets/img/card-img/${props.lang}.jpg`} alt={props.title} width={1600} height={900} />
                </div>
                <h2>{props.title}</h2>
                <h3>{props.lang}</h3>
                <p className={classes.ellipsis}>{props.description}</p>
                <div className={classes.actions}>
                    <button
                        className={classes.btn}
                        onClick={onOpenModal}
                    >more details
                    </button>

                    {isModalOpen && <ProjectDetailsModal
                        onCloseModal={closeModalHandler}
                        id={props.id}
                        img={modalImage}
                        title={props.title}
                        description={props.description}
                        linkToProject={props.linkToProject}
                        linkToCode={props.gitHubLink}
                    />}
                    <a target='_blank' href={props.linkToProject} rel='noopener noreferrer'>
                        <i className={classes.btn}>Go to project {''}
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </i>
                    </a>
                    <a target='_blank' href={props.gitHubLink} rel='noopener noreferrer'>
                        <i className={classes.btn} >watch the code {''}
                            <FontAwesomeIcon icon={faGithub} />
                        </i>
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default ProjectItem;
