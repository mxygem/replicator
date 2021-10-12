import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <nav>
          <Link href="/">
            <a>Upload</a>
          </Link>{" "}
          |{" "}
          <Link href="/status">
            <a>Status</a>
          </Link>{" "}
          |{" "}
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </nav>
        <h1>
          <Link href="/">
            <a>Replicator</a>
          </Link>
        </h1>
      </div>
    </header>
  );
}
