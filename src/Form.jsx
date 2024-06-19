import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type in your email"
      />
      <button className={`${styles.btn} ${styles.primary}`}>Register</button>
    </form>
  );
}
