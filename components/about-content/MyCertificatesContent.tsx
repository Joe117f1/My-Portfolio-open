import { BaseSyntheticEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from '../ui/Modal';
import classes from './MyCertificatesContent.module.css';

const HARD_CODED_CERTS = [
  {
    path: '/assets/Certificates/CEH certificate- Linux academy a cloud guru.jpg',
    alt: 'CEH certificate- Linux academy a cloud guru',
    width: 400,
    height: 330,
  },
  {
    path: '/assets/Certificates/linux-lpi-certificate.PNG',
    alt: 'linux-lpi-certificate- Linux academy a cloud guru',
    width: 400,
    height: 330,
  },
  {
    path: '/assets/Certificates/clean-code-certificate.PNG',
    alt: 'clean-code- Academind certificate',
    width: 400,
    height: 330,
  },
  {
    path: '/assets/Certificates/react.js-certicate.PNG',
    alt: 'react.js- Academind certificate',
    width: 400,
    height: 330,
  },
  {
    path: '/assets/Certificates/JavaScript-algorithms.PNG',
    alt: 'JavaScript algorithms- Academind certificate',
    width: 400,
    height: 330,
  },
];

export const MyCertificatesContent = () => {
  const [certificateIdx, setCertificateIdx] = useState<number | null>(null);
  const certObj = HARD_CODED_CERTS[certificateIdx! - 1];

  const closeModalHandler = () => {
    setCertificateIdx(null);
  };

  const certClickHandler = ({ currentTarget }: BaseSyntheticEvent) => {
    const certIdx = currentTarget.getAttribute('t-whoami');
    setCertificateIdx(certIdx);
  };

  return (
    <div className={classes.main}>
      <ul className={classes.container}>
        {HARD_CODED_CERTS.map((cert, index) => (
          <li onClick={certClickHandler} key={cert.path} t-whoami={index + 1}>
            <Image
              src={cert.path}
              alt={cert.alt}
              width={cert.width}
              height={cert.height}
              // layout={cert.layout} //TODO: check about the layout
            />
          </li>
        ))}
      </ul>
      {certificateIdx && (
        <Modal onCloseModal={closeModalHandler}>
          <Image
            src={certObj.path}
            alt={certObj.alt}
            width={800}
            height={700}
            // layout={certObj.layout}
          />
        </Modal>
      )}
      <Link className={classes.test} href='/about/my-stack'>
        my technological stack
      </Link>
    </div>
  );
};
