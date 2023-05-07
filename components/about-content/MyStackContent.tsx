import Link from 'next/link';
import { HeroWord } from '../ui/HeroWord';
import classes from './MyStackContent.module.css';

export const MyStackContent = () => {
  return (
    <div className={classes.container}>
      <h1>My developer tool box</h1>
      <p>
        My ever growing list of languages, frameworks and proficiencies, that
        help me bring any project to life
      </p>
      <h2>Front-End &lt; / &gt;</h2>
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
          <h3>Redux /Redux Toolkit</h3>
        </li>
        <li>
          <h3>Recoil</h3>
        </li>
        <li>
          <h3>TypeScript</h3>
        </li>
        <li>
          <h3>HTML &amp; CSS</h3>
        </li>
      </ul>
      <h2>Back-End &#123; &#125;</h2>
      <ul>
        <li>
          <h3>Node.js /Express</h3>
        </li>
        <li>
          <h3>Nest js</h3>
        </li>
        <li>
          <h3>mongoDB</h3>
        </li>
        <li>
          <h3>Postgres</h3>
        </li>
        <li>
          <h3>Docker &amp; Kubernetes</h3>
        </li>
        <li>
          <h3>AWS</h3>
        </li>
        <li>
          <h3>Linux server</h3>
        </li>
      </ul>
      <Link href='/about/my-certificates'>Certificates</Link>
      <i>
        <HeroWord path={'/create'} text={'create'} fontSize={3} />
      </i>
    </div>
  );
};
