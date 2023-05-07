import * as ReactDOM from 'react-dom';
import { LoadingSpinner } from './LoadingSpinner';
import { StatusesEnum } from '../../types/enums';
import classes from './Notification.module.css';

interface IProps {
  status: string;
  title: string;
  message: string;
}

const Notification = ({ status, title, message }: IProps) => {
  let statusClasses = '';

  if (status === StatusesEnum.PENDING) {
    statusClasses = classes.pending;
  }
  if (status === StatusesEnum.SUCCESS) {
    statusClasses = classes.success;
  }
  if (status === StatusesEnum.ERROR) {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <div className={classes.spinner}>
        {status === StatusesEnum.PENDING && <LoadingSpinner />}
      </div>
      <p>{message}</p>
    </div>,
    document.getElementById('overlay-root')!
  );
};

export default Notification;
