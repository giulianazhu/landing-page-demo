import styles from "./Form.module.css";

function handleSubmit(e) {
  e.preventDefault();
}

export default function Form() {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type in your email"
      />
      <button className={`${styles.btn} ${styles.primary}`}>Register</button>
    </form>
  );
}
