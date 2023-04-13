import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Log from "../Logo/Logo";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.Logo}>
        <Link href="/">
          <Log />
        </Link>
      </div>
      <div className={styles.NavItems}>
        <ul className="flex flex-wrap items-center justify-between px-3">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
