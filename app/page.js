import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";
import WordAnimator from "./components/Wave/Wave";
import Link from "next/link";
import DownloadCV from "./components/DownloadCV/DownloadCV";
import { saveAs } from "file-saver";
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
      <div className="">
        <Image src={`/svg3.svg`} alt="Logo" width={500} height={500} priority />
      </div>
      <div className="">
        <div className={styles.ElevatorPitch}>
          <p>Hello, I'm</p>
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
            <button
              className={styles.homeBtn}
              // onClick={() =>
              //   saveAs(
              //     "https://docs.google.com/document/d/1b6zDOMGYeksAIABBjD2W7RjRaj7XdAeO02pYhiH_tMQ/export?format=pdf",
              //     "QueensKisivuliCV.pdf"
              //   )
              // }
            >
              Download CV
            </button>
            {/* <DownloadCV
              className={styles.socialsContainer}
              link="https://docs.google.com/document/d/1b6zDOMGYeksAIABBjD2W7RjRaj7XdAeO02pYhiH_tMQ/export?format=pdf"
            /> */}
            <Link href="/contact">
              <button className={styles.homeBtn}>Contact Info</button>
            </Link>
          </div>
          <div className={styles.socialsContainer}>
            <Link
              className="linkedin"
              href="https://www.linkedin.com/in/queens-kisivuli-5405b2247/"
            >
              <BsLinkedin />
            </Link>
            <Link href="https://github.com/queensk">
              <BsGithub />
            </Link>
            <Link href="https://medium.com/@queenskisivuli">
              <BsMedium />
            </Link>
            <Link href="https://www.youtube.com/@dreamride7375">
              <BsYoutube />
            </Link>
            <Link href="/">
              <BsTwitter />
            </Link>
            <Link href="/">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
