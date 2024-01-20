import styles from "./header.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import Units from "./Units";
import Cart from "./Cart";
import { useRef, useEffect, useState } from "react";

function Header() {
  const navList = ["all", "dresses", "blouses", "jeans", "shoes"];

  const [isOpenUnitSelector, setIsOpenUnitSelector] = useState(false);
  const [isOpenCartStatus, setIsOpenCartStatus] = useState(false);

  const unitSelectorRef = useRef();
  const cartRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!unitSelectorRef.current.contains(e.target))
        setIsOpenUnitSelector(false);
      if (!cartRef.current.contains(e.target)) setIsOpenCartStatus(false);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

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
        {navList.map((nav, index) => (
          <li key={index} className={styles.navItem}>
            <a href="/@{nav}" className={styles.navLink}>
              {nav}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.tools}>
        <div
          className={styles.selectUnits}
          onClick={() => setIsOpenUnitSelector(!isOpenUnitSelector)}
          ref={unitSelectorRef}
        >
          $
          <span className={isOpenUnitSelector ? styles.arrowUp : ""}>
            <MdKeyboardArrowDown />
          </span>
        </div>
        {isOpenUnitSelector && <Units />}
        <div className={styles.cart} ref={cartRef}>
          <div
            className={styles.cartIcon}
            onClick={() => setIsOpenCartStatus(!isOpenCartStatus)}
          >
            <BsCart3 />
          </div>
          {isOpenCartStatus && <Cart />}
        </div>
      </div>
    </header>
  );
}

export default Header;
