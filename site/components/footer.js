import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <a href="https://github.com/mxygem">Created in 2021 by mxygem</a>|{" "}
        <a href="https://github.com/mxygem/replicator">
          Check out the source code
        </a>
      </div>
    </footer>
  );
}
