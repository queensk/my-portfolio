import React from "react";
import styles from "./page.module.css";
import { SiStyledcomponents } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import CodeHighlighter from "../components/CodeComponent/CodeComponent";
import Experience from "../components/Experience/Experience"

const code = `
          class QueensKisivuli {
          // I'm ambitious and I love new challenges :)
          // My vast variety of skills is continuously expanding.
          constructor() {
            this.name = 'Queens Kisivuli';
            this.dayOfBirthTimestamp = 950734800;
            this.email = 'queenskisivuli@gmail.com';
          }
          workExperience() {
            return [
              { '2017-2020': 'Backend Developer AlX Software Engeneer' },
              { '2022-2022': 'Full-stack Developer/NEA-GROUP-OF-GLOBAL-GIANTS' },
              { '2022-2022': 'Network Management' },
            ];
          }
          education() {
            return [
              { '2019-2023': 'BSC Computer Science Education Kirinyaga University' },
              { '2022-2022': 'Full Stack Developer - Udacity'},
              { '2022-2022': 'Cloud DevOps Engineer - Udacity'},
            ];
          }
          skills() {
            return [
              'HTML/CSS/JS', 'Node.js', 'Redis/NATS/RabbitMQ', 'Bootstrap/Tailwind', 'Webpack/Gulp/Vite', 
              'SCSS/Less', 'npm/yarn/pnpm', 'Docker/k8s', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript',
              'Electron', 'Web-extensions', 'Web Sockets', 'Firebase, 'RWD/W3C/ARIA/WCAG', 'XSLT/Smarty/Twig', 'PHP',
              'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design',
              'DTP', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress', 'Jest', 'Nuxt', 'Quasar','Frontend', 'Backend',
              'Full-Stack', 'Microservices', 'Distributed Systems', 'DevOps Engineer'
            ];
          }
        }
        `;

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.navDummy}></div>
      <div className={styles.aboutContent}>
        <h1>About Me</h1>
        <div className={styles.aboutTemplate}>
          <Experience
            className={styles.detailsContainer}
            icon={<MdCastForEducation />}
            Header="Experience"
            experience="Frontend Development"
            time={2}
          />
          <Experience
            className={styles.detailsContainer}
            icon={<SiStyledcomponents />}
            Header="Experience"
            experience="Backend Development"
            time={2}
          />
          <Experience
            className={styles.detailsContainer}
            icon={<SiStyledcomponents />}
            Header="Experience"
            experience="DevOps Engineer"
            time={1}
          />
          <Experience
            className={styles.detailsContainer}
            icon={<SiStyledcomponents />}
            Header="Education"
            experience="BSC Compute Science Degree"
            time={4}
          />
        </div>
        <div className={styles.textContainer}>
          <CodeHighlighter code={code} language="javascript" />
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
