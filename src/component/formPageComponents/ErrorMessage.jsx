import styles from "./Form.module.css";

function ErrorMessage({ error }) {
  return error ? <p className={styles.error}>{error}</p> : null;
}

export default ErrorMessage;
