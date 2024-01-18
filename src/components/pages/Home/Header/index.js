import styles from "./header.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.wrapper}>
      <a href="/" className={styles.homePage}>
        Shopping Time
      </a>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            HOME
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            ALL
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            DRESSES
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            BLOUSES
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            JEANS
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            SHOES
          </a>
        </li>
      </ul>
      <div className={styles.tools}>
        <div className={styles.selectUnits}>
          $
          <MdKeyboardArrowDown />
        </div>
        <div className={styles.unitsList}>
          <div className={styles.unit}>$ USD</div>
          <div className={styles.unit}>€ EUR</div>
          <div className={styles.unit}>£ GBP</div>
          <div className={styles.unit}>A$ AUD</div>
          <div className={styles.unit}>¥ JPY</div>
          <div className={styles.unit}>₽ RUB</div>
        </div>
        <div className={styles.cart}>
          <BsCart3 />
        </div>
      </div>
    </header>
  );
}

export default Header;
