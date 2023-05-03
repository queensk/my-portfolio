import React from "react";
import styles from "./page.module.css";
import { SiStyledcomponents } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import CodeComponent from "../components/CodeComponent/CodeComponent";

const code = `
\`\`\`javascript
          class JanBaszczok {
          // I'm ambitious and I love new challenges :)
          // My vast variety of skills is continuously expanding.
          constructor() {
            this.name = 'Jan Baszczok';
            this.dayOfBirthTimestamp = 602745592;
            this.email = 'baszczok@yasio.dev';
          }
          workExperience() {
            return [
              { '2020-now': 'Full-stack Developer/Owner at Pixel Lab' },
              { '2020-now': 'Full-stack Developer at Digitree Group S.A.' },
              { '2017-2020': 'Front-end Developer at Digitree Group S.A.' },
              { '2015-2017': 'Full-Stack Designer at Digitree Group S.A.' },
              { '2013-2015': 'Graphic Designer at Digitree Group S.A.' },
              { '2006-now': 'Full-Stack Designer/developer at Yasio.dev' },
            ];
          }
          education() {
            return [
              { '2012-2014': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - mgr IT' },
              { '2008-2012': 'Wyższa Szkoła Technologii Informatycznych w Katowicach - inż. IT' },
            ];
          }
          skills() {
            return [
              'HTML/CSS/JS', 'Vue', 'Node.js', 'Redis/NATS/RabbitMQ', 'Bootstrap/Tailwind', 'Webpack/Gulp/Vite', 
              'SCSS/Less', 'npm/yarn/pnpm', 'Docker/k8s', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript',
              'Electron', 'Web-extensions', 'Web Sockets', 'Firebase, 'RWD/W3C/ARIA/WCAG', 'XSLT/Smarty/Twig', 'PHP',
              'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design',
              'UX/UI', 'DTP', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress', 'Jest', 'Nuxt', 'Quasar',
            ];
          }
        }
\`\`\`
`;

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.navDummy}></div>
      <div className={styles.aboutContent}>
        <h1>About Me</h1>
        <div className={styles.aboutTemplate}>
          <div className={styles.detailsContainer}>
            <SiStyledcomponents />
            <h3>Experience</h3>
            <p>
              2+ years <br />
              Frontend Development
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <SiStyledcomponents />
            <h3>Experience</h3>
            <p>
              2+ years <br />
              Frontend Development
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <SiStyledcomponents />
            <h3>Experience</h3>
            <p>
              2+ years <br />
              Frontend Development
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <MdCastForEducation />
            <h3>Education</h3>
            <p>
              B.Sc. Bachelors Degree
              <br />
              M.Sc. Masters Degree
            </p>
          </div>
        </div>
        <div className={styles.textContainer}>
          {/* <SyntaxHighlighter language="javascript" style={atomDark}>
            {`class Jan Baszczok {
    // I'm ambitious and I love new challenges :)
    // My vast variety of skills is continuously expanding.
    constructor() {
      this.name = 'Jan Baszczok';
      this.dayOfBirthTimestamp = 602745592;
      this.email = 'baszczok@yasio.dev';
    }
    workExperience() {
      return [
        { '2020-now': 'Full-stack Developer/Owner at Pixel Lab' },
        { '2020-now': 'Full-stack Developer at Digitree Group S.A.' },
        { '2017-2020': 'Front-end Developer at Digitree Group S.A.' },
        { '2015-2017': 'Full-Stack Designer at Digitree Group S.A.' },
        { '2013-2015': 'Graphic Designer at Digitree Group S.A.' },
        { '2006-now': 'Full-Stack Designer/developer at Yasio.dev' },
      ];
    }
    education() {
      return [
        { '2012-2014': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - mgr IT' },
        { '2008-2012': 'Wyższa Szkoła Technologii Informatycznych w Katowicach - inż. IT' },
      ];
    }
    skills() {
      return [
        'HTML/CSS/JS',
        'Vue',
        'Node.js',
        'Redis/NATS/RabbitMQ',
        'Bootstrap/Tailwind',
        'Webpack/Gulp/Vite',
        'SCSS/Less',
        'npm/yarn/pnpm',
        'Docker/k8s',
        'PWA',
        'SSR',
        'SPA',
        'GIT/CVS',
        'Cordova',
        'NativeScript',
        'Electron',
        'Web-extensions',
        'Web Sockets',
        'Firebase',
        'RWD/W3C/ARIA/WCAG',
        'XSLT/Smarty/Twig',
        'PHP',
        'MySQL/MongoDB/ORM',
        'Wordpress',
        'Photoshop',
        'Illustrator',
        'After Effects',
        'Premiere',
        'Motion design',
        'UX/UI',
        'DTP',
        'C#',
        'Unity',
        'TypeScript',
        'NestJS',
        'Cypress',
        'Jest',
        'Nuxt',
        'Quasar',
      ];
    }
  }`}
          </SyntaxHighlighter> */}

          <CodeComponent code={code} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </div>
  );
}
