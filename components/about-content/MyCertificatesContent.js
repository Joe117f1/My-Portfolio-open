import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../../components/ui/Modal';
import classes from './MyCertificatesContent.module.css';

const HARD_CODED_CERTS = [
    {
        path: '/assets/Certificates/certificate-name1.jpg',
        alt: 'certificate name & from',
        width: 400,
        height: 330,
    },
    {
        path: '/assets/Certificates/certificate-name2.jpg',
        alt: 'linux-lpi-certificate- Linux academy a cloud guru',
        width: 400,
        height: 330,
    },
    {
        path: '/assets/Certificates/certificate-name3.jpg',
        alt: 'clean-code- Academind certificate',
        width: 400,
        height: 330,
    },
    {
        path: '/assets/Certificates/certificate-name4.jpg',
        alt: 'react.js- Academind certificate',
        width: 400,
        height: 330,
    },
];

const MyCertificatesContent = () => {

    const [certificateIdx, setCertificateIdx] = useState(null);
    const certObj = HARD_CODED_CERTS[certificateIdx - 1];

    const closeModalHandler = () => {
        setCertificateIdx(null);
    }

    const certClickHandler = ({ currentTarget }) => {
        const certIdx = (currentTarget.getAttribute('t-whoami'));
        setCertificateIdx(certIdx);
    }

    return (
        <div className={classes.main}>
            <ul className={classes.container}>
                {HARD_CODED_CERTS.map((cert, index) => (

                    <li onClick={certClickHandler}
                        key={cert.path}
                        t-whoami={index + 1}
                    >
                        <Image src={cert.path}
                            alt={cert.alt}
                            width={cert.width}
                            height={cert.height}
                            layout={cert.layout}
                        />
                    </li>
                ))}
            </ul>
            {certificateIdx && (
                <Modal onCloseModal={closeModalHandler}>
                    <Image src={certObj.path}
                        alt={certObj.alt}
                        width={800}
                        height={700}
                        layout={certObj.layout}
                    />
                </Modal>
            )}
            <Link className={classes.test} href='/about/my-stack'>my technological stack</Link>
        </div>
    );
}

export default MyCertificatesContent;