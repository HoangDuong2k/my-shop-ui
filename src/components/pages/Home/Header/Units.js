import styles from "./header.module.css";

function Units() {
  return (
    <div className={styles.unitsList}>
      <div className={styles.unit}>$ USD</div>
      <div className={styles.unit}>€ EUR</div>
      <div className={styles.unit}>£ GBP</div>
      <div className={styles.unit}>A$ AUD</div>
      <div className={styles.unit}>¥ JPY</div>
      <div className={styles.unit}>₽ RUB</div>
    </div>
  );
}

export default Units;
