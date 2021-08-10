import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Notification from '../ui/Notification';
import classes from './ContactForm.module.css';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong..');
  }
};

const ContactForm = () => {

  const [requestStatus, setRequestStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = async (data) => {
    setRequestStatus('pending');
    try {
      await sendContactData({
        email: data.email,
        name: data.name,
        message: data.message
      });
      setRequestStatus('success');
      reset();
    } catch (error) {
      setRequestStatus('error');
      setErrorMessage(error.message);
    }
  };

  const notificationStatus = {
    pending: {
      status: 'pending',
      title: 'Sending...',
      message: 'Your message is on its way'
    },
    success: {
      status: 'success',
      title: 'Success!',
      message: 'I got it'
    },
    error: {
      status: 'error',
      title: 'Error',
      message: errorMessage
    }
  };

  const [watchName, watchMessage, watchEmail,] = watch(['name', 'message', 'email']);

  const validName = watchName && watchName.trim().length > 1;
  const validMessage = watchMessage && watchMessage.trim().length > 6;
  const validEmail = watchEmail && watchEmail.includes('@');

  let isFormReady;
  if (validName && validEmail && validMessage) {
    isFormReady = true;
  }
  const btnReadyClass = isFormReady ? `${classes.ready}` : `${''}`;

  return (
    <section className={classes.contact}>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              {...register('email', {
                required: 'Please enter your Email',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid Email'
                },
                validate: value => value.trim().length > 4 && value.includes('@'),
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              {...register('name', {
                required: 'Please enter your name',
                minLength: {
                  value: 2,
                  message: 'Please enter a name longer than 2 characters'
                },
                validate: value => value.trim().length > 2,
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Enter message</label>
          <textarea
            type='text'
            id='message'
            rows='10'
            placeholder='Your most important step is your next step'
            {...register('message', {
              required: 'Please enter your message',
              minLength: {
                value: 6,
                message: 'Your message is too short'
              },
              validate: value => value.trim().length > 6,
            })}
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div className={classes.actions}>
          <button className={btnReadyClass} >Send Message</button>
        </div>
      </form>
      {requestStatus && (
        <Notification
          status={notificationStatus[requestStatus].status}
          title={notificationStatus[requestStatus].title}
          message={notificationStatus[requestStatus].message}
        />)}
    </section>
  );
};

export default ContactForm;
