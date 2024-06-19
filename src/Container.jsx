import styles from "./Container.module.css";

export default function Container({ children, flow }) {
  return (
    <div className={`${styles.container} ${styles[flow]}`}>{children}</div>
  );
}
