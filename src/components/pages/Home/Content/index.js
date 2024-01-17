import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item1}>
        <a href="/" className={styles.itemBtn}>
          Blouses
        </a>
      </div>
      <div className={styles.item2}>
        <a href="/" className={styles.itemBtn}>
          Jeans
        </a>
      </div>
      <div className={styles.item3}>
        <a href="/" className={styles.itemBtn}>
          Shoes
        </a>
      </div>
      <div className={styles.item4}>
        <a href="/" className={styles.itemBtn}>
          Dresses
        </a>
      </div>
      <div className={styles.item5}>
        <a href="/" className={styles.itemBtn}>
          Store
        </a>
      </div>
    </div>
  );
}

export default Content;
