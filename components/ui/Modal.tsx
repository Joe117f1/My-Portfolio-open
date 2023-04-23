import { ReactNode } from 'react';
import { DomPortal } from './DomPortal';
import classes from './Modal.module.css';

interface BackDropProps {
  onCloseModal: () => void;
}

interface ModalProps extends BackDropProps {
  children: ReactNode;
}
const BackDrop = ({ onCloseModal }: BackDropProps) => {
  return (
    <DomPortal selector='#backdrop-root'>
      <div className={classes.backdrop} onClick={onCloseModal}></div>
    </DomPortal>
  );
};

export const ModalOverlay = ({ children, onCloseModal }: ModalProps) => {
  return (
    <DomPortal selector='#overlay-root'>
      <div className={classes.modal}>
        {children}
        <button className={classes.btn} type='button' onClick={onCloseModal}>
          Back
        </button>
      </div>
    </DomPortal>
  );
};

export const Modal = ({ children, onCloseModal }: ModalProps) => {
  return (
    <>
      <BackDrop onCloseModal={onCloseModal} />
      <ModalOverlay onCloseModal={onCloseModal}>{children}</ModalOverlay>
    </>
  );
};
