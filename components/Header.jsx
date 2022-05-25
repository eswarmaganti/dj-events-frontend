import Link from "next/link";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a className={styles.brand}>DJ Events</a>
        </Link>
      </div>
      <nav>
        <ul className={styles.navbarInner}>
          <li className={styles.link}>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
