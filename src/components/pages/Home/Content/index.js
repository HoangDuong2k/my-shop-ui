import styles from "./Content.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Content() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item1}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>Blouses</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item2}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>Jeans</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item3}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>Shoes</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item4}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>Dresses</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item5}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>Store</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Content;
