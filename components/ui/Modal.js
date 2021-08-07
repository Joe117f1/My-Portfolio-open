import { Fragment } from 'react';
import DomPortal from './DomPortal';
import classes from './Modal.module.css';

const BackDrop = props => {
    return (
        <DomPortal selector='#backdrop-root'>
            <div
                className={classes.backdrop}
                onClick={props.onCloseModal}
            >
            </div>
        </DomPortal>
    );
}

const ModalOverlay = props => {
    return (
        <DomPortal selector='#overlay-root'>
            <div className={classes.modal}>
                {props.children}
                <button
                    className={classes.btn}
                    type='button'
                    onClick={props.onCloseModal}>
                    Back
                </button>
            </div>
        </DomPortal>
    );
}

const Modal = (props) => {
    return (
        <Fragment>
            <BackDrop onCloseModal={props.onCloseModal} />
            <ModalOverlay onCloseModal={props.onCloseModal}>
                {props.children}
            </ModalOverlay>
        </Fragment>
    );
}

export default Modal;
