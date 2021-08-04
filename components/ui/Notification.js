import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
import classes from './Notification.module.css';

const Notification = (props) => {
  const { status, title, message } = props;
  let statusClasses = '';

  if (status === 'pending') {
    statusClasses = classes.pending;
  };
  if (status === 'success') {
    statusClasses = classes.success;
  };
  if (status === 'error') {
    statusClasses = classes.error;
  };

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <div className={classes.spinner}>
        {status === 'pending' && <LoadingSpinner />}
      </div>
      <p>{message}</p>
    </div>,
    document.getElementById('overlay-root')
  );
};

export default Notification;