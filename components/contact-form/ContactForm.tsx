import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import Notification from '../ui/Notification';
import {
  StatusesEnum,
  NotificationTitelsEnum,
  InputLabelsEnum,
} from '../../types/enums';
import classes from './ContactForm.module.css';

interface NotificationStatus {
  status: string;
  title: string;
  message: string;
}

type TNotificationMapper = Record<StatusesEnum, NotificationStatus>;

interface ContactData {
  email: string;
  name: string;
  message: string;
}

const sendContactData = async (contactDetails: ContactData) => {
  //TODO: change to reusable api approach
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong..');
  }
};

export const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (
      requestStatus === StatusesEnum.SUCCESS ||
      requestStatus === StatusesEnum.ERROR
    ) {
      //TODO: move to enum
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = async (data: ContactData) => {
    setRequestStatus(StatusesEnum.PENDING);
    try {
      await sendContactData({
        email: data.email,
        name: data.name,
        message: data.message,
      });
      setRequestStatus(StatusesEnum.SUCCESS);
      reset();
    } catch (error) {
      setRequestStatus(StatusesEnum.ERROR);
      let message = 'Unknown Error'; //TODO: move to enum
      if (error instanceof Error) message = error.message;
      setErrorMessage(message);
    }
  };

  //TODO: move to enum
  const notificationMapper: TNotificationMapper = {
    pending: {
      status: StatusesEnum.PENDING,
      title: `${NotificationTitelsEnum.SENDING}...`,
      message: 'Your message is on its way',
    },
    success: {
      status: StatusesEnum.SUCCESS,
      title: NotificationTitelsEnum.SUCCESS,
      message: 'I got it',
    },
    error: {
      status: StatusesEnum.ERROR,
      title: NotificationTitelsEnum.ERROR,
      message: errorMessage ?? '',
    },
  };

  const [watchName, watchMessage, watchEmail] = watch([
    InputLabelsEnum.NAME,
    InputLabelsEnum.MESSAGE,
    InputLabelsEnum.EMAIL,
  ]);

  const validName = watchName && watchName.trim().length > 1;
  const validMessage = watchMessage && watchMessage.trim().length > 6;
  const validEmail = watchEmail && watchEmail.includes('@');

  let isFormReady;
  if (validName && validEmail && validMessage) {
    isFormReady = true;
  }
  const btnReadyClass = isFormReady ? `${classes.ready}` : '';

  return (
    <>
      <div className={classes.title}>
        <h1>Let&#39;s create something awesome!</h1>
      </div>
      <section className={classes.contact}>
        <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor={InputLabelsEnum.EMAIL}>Your Email</label>
              <input
                type={InputLabelsEnum.EMAIL}
                id={InputLabelsEnum.EMAIL}
                {...register('email', {
                  required: 'Please enter your Email',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid Email',
                  },
                  validate: value =>
                    value.trim().length > 4 && value.includes('@'),
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={classes.control}>
              <label htmlFor={InputLabelsEnum.NAME}>Your Name</label>
              <input
                type='text'
                id={InputLabelsEnum.NAME}
                {...register(InputLabelsEnum.NAME, {
                  required: 'Please enter your name',
                  minLength: {
                    value: 2,
                    message: 'Please enter a name longer than 2 characters',
                  },
                  validate: value => value.trim().length > 2,
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor={InputLabelsEnum.MESSAGE}>Enter message</label>
            <textarea
              id={InputLabelsEnum.MESSAGE}
              rows={10}
              placeholder='Your most important step is your next step'
              className={classes.textarea}
              {...register('message', {
                required: 'Please enter your message',
                minLength: {
                  value: 6,
                  message: 'Your message is too short',
                },
                validate: value => value.trim().length > 6,
              })}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <div className={classes.actions}>
            <button className={btnReadyClass}>Send Message</button>
          </div>
        </form>
        {requestStatus && (
          <Notification
            status={
              notificationMapper[requestStatus as keyof TNotificationMapper]
                .status
            }
            title={
              notificationMapper[requestStatus as keyof TNotificationMapper]
                .title
            }
            message={
              notificationMapper[requestStatus as keyof TNotificationMapper]
                .message
            }
          />
        )}
      </section>
    </>
  );
};
