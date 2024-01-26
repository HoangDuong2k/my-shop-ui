import styles from "./header.module.css";

function Currency() {
  return (
    <div className={styles.currencyList}>
      <div className={styles.currency}>$ USD</div>
      <div className={styles.currency}>€ EUR</div>
      <div className={styles.currency}>£ GBP</div>
      <div className={styles.currency}>A$ AUD</div>
      <div className={styles.currency}>¥ JPY</div>
      <div className={styles.currency}>₽ RUB</div>
    </div>
  );
}

export default Currency;
