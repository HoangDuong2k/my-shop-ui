import styles from "./header.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import Currency from "./Currency";
import Cart from "./Cart";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Languege from "./Language";
import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();

  const navList = ["all", "cosmetics", "houseware", "ginseng"];

  const [isOpenCurrencySelector, setIsOpenCurrencySelector] = useState(false);
  const [isOpenCartStatus, setIsOpenCartStatus] = useState(false);
  const [isOpenLangSelector, setIsOpenLangSelector] = useState(false);

  const currencySelectorRef = useRef();
  const cartRef = useRef();
  const langRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!currencySelectorRef.current.contains(e.target))
        setIsOpenCurrencySelector(false);
      if (!cartRef.current.contains(e.target)) setIsOpenCartStatus(false);
      if (!langRef.current.contains(e.target)) setIsOpenLangSelector(false);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.homePage}>
        Shopping Time
      </Link>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            {t("header.home")}
          </Link>
        </li>
        {navList.map((nav, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={"/" + nav} className={styles.navLink}>
              {t("header.nav.item" + String(index + 1))}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.tools}>
        <div
          className={styles.currencySelector}
          onClick={() => setIsOpenCurrencySelector(!isOpenCurrencySelector)}
          ref={currencySelectorRef}
        >
          $
          <span className={isOpenCurrencySelector ? styles.arrowUp : ""}>
            <MdKeyboardArrowDown />
          </span>
        </div>
        {isOpenCurrencySelector && <Currency />}

        <div className={styles.cart} ref={cartRef}>
          <div
            className={styles.cartIcon}
            onClick={() => setIsOpenCartStatus(!isOpenCartStatus)}
          >
            <BsCart3 />
          </div>
          {isOpenCartStatus && <Cart />}
        </div>
        <div className={styles.langSelector}>
          <div
            className={styles.currentLang}
            onClick={() => setIsOpenLangSelector(!isOpenLangSelector)}
            ref={langRef}
          >
            {i18n.language}
          </div>
          {isOpenLangSelector && <Languege />}
        </div>
      </div>
    </header>
  );
}

export default Header;
