import Link from 'next/link';
import classes from './HeroWord.module.css';

const HeroWord = (props) => {
    let fontSize;
    if (props.fontSize) {
        fontSize = props.fontSize;
    }

    const cssClasses = fontSize ? `${classes.container} ${classes.fontSize}` : classes.container;
    return (
        <div className={cssClasses}>
            <Link href={props.path}>{props.text}</Link>
        </div>
    );
}

export default HeroWord;
