import Link from 'next/link';
import HeroWord from '../ui/HeroWord';
import classes from './MyStackContent.module.css';

const MyStackContent = () => {
  return (
    <div className={classes.container}>
      <h1>My developer tool box</h1>
      <p>
        My ever growing list of languages, frameworks and proficiencies,
        that help me bring any project into life
      </p>
      <h2 className={classes.front}>Front-End &lt; / &gt;</h2>
      <ul className={classes.border}>
        <li>
          <h3>JavaScript</h3>
        </li>
        <li>
          <h3>React</h3>
        </li>
        <li>
          <h3>NEXT.js</h3>
        </li>
        <li>
          <h3>TypeScript</h3>
        </li>
        <li>
          <h3>HTML &amp; CSS</h3>
        </li>
      </ul>
      <h2 className={classes.back}>Back-End &#123; &#125;</h2>
      <ul>
        <li >
          <h3>Node.js</h3>
        </li>
        <li >
          <h3>mongoDB</h3>
        </li>
        <li >
          <h3>AWS</h3>
        </li>
        <li >
          <h3>Linux server</h3>
        </li>
      </ul>
      <Link href='/about/my-certificates'>Certificates</Link>
      <i>
        <HeroWord path={'/works'} text={'my works'} fontSize={3} />
      </i>
    </div>
  );
};

export default MyStackContent;
