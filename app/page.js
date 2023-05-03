import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";
import WordAnimator from "./components/Wave/Wave";
import Link from "next/link";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsMedium,
  BsYoutube,
} from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} ${styles.main}`}>
      <div className={styles.profileIMGContainer}>
        <Image
          src={`/svg3.svg`}
          alt="Logo"
          fill="true"
          priority
          className={styles.profileIMG}
        />
      </div>
      <div className="">
        <div className={styles.ElevatorPitch}>
          <p>{"Hello, I'm"}</p>
          <WordAnimator word="Queens Kisivuli" />
          <h2>Software Engineer</h2>
          <p>
            As a software engineer who is willing to learn and loves building, I
            have a passion for programming and a drive to continuously improve
            my skills. I am motivated by the challenge of solving complex
            problems and enjoy exploring new technologies and programming
            languages.
          </p>
          <div className={styles.btnContainer}>
            <Link
              href="https://docs.google.com/document/d/1b6zDOMGYeksAIABBjD2W7RjRaj7XdAeO02pYhiH_tMQ/export?format=pdf"
              download
            >
              <button className={styles.homeBtn}>Download CV</button>
            </Link>
            <Link href="/contact">
              <button className={styles.homeBtn}>Contact Info</button>
            </Link>
          </div>
          <div className={styles.socialsContainer}>
            <Link
              className={styles.linkedin}
              href="https://www.linkedin.com/in/queens-kisivuli-5405b2247/"
            >
              <BsLinkedin />
            </Link>
            <Link className={styles.github} href="https://github.com/queensk">
              <BsGithub />
            </Link>
            <Link
              className={styles.medium}
              href="https://medium.com/@queenskisivuli"
            >
              <BsMedium />
            </Link>
            <Link
              className={styles.youtube}
              href="https://www.youtube.com/@dreamride7375"
            >
              <BsYoutube />
            </Link>
            <Link className={styles.twitter} href="/">
              <BsTwitter />
            </Link>
            <Link className={styles.instagram} href="/">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
