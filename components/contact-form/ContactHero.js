import Image from 'next/image';
import classes from './ContactHero.module.css';

const ContactHero = () => {
    return (
        <div className={classes.container}>
            <h1>Let's create something awesome!</h1>
            <div className={classes.img}>
                <Image
                    src='/assets/img/site-img/contact-img.png'
                    alt='description'
                    width={1000}
                    height={631} />
            </div>
        </div>
    );
};

export default ContactHero;