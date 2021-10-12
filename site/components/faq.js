import styles from "../styles/Home.module.css";

export default function FAQ({ questions }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FAQ</h1>
      <ol>
        {questions.map(({ q, a, l }, index) => (
          <li key={index}>
            <p className={styles.question}>Q: {q}</p>
            {!l ? (
              <p>A: {a}</p>
            ) : (
              <p>
                A: <a href={a}>{a}</a>
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
