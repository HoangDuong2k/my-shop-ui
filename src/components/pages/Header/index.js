import styles from "./header.module.css";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdOutlineClose,
  MdAccountCircle,
} from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import Currency from "./Currency";
import Cart from "./Cart";
import Account from "./Account";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Languege from "./Language";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../../shop-context";

function Header() {
  const { t, i18n } = useTranslation();
  const { currency, numberItems } = useContext(ShopContext);

  const navList = ["all", "cosmetics", "houseware", "ginseng"];

  const [isOpenCurrencySelector, setIsOpenCurrencySelector] = useState(false);
  const [isOpenCartStatus, setIsOpenCartStatus] = useState(false);
  const [isOpenLangSelector, setIsOpenLangSelector] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const currencySelectorRef = useRef();
  const cartRef = useRef();
  const langRef = useRef();
  const accountRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!currencySelectorRef.current.contains(e.target))
        setIsOpenCurrencySelector(false);
      if (!cartRef.current.contains(e.target)) setIsOpenCartStatus(false);
      if (!langRef.current.contains(e.target)) setIsOpenLangSelector(false);
      if (!accountRef.current.contains(e.target)) setIsOpenAccount(false);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header
      className={
        !isOpenMenu ? styles.wrapper : styles.wrapper + " " + styles.isOpenMenu
      }
    >
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

      {/*--------------------- tool ---------------------*/}

      <div className={styles.tools}>
        {/* --------- currency -------------- */}
        <div
          className={styles.currencySelector}
          onClick={() => setIsOpenCurrencySelector(!isOpenCurrencySelector)}
          ref={currencySelectorRef}
        >
          {currency.symbol}
          <span className={isOpenCurrencySelector ? styles.arrowUp : ""}>
            <MdKeyboardArrowDown />
          </span>
        </div>
        {isOpenCurrencySelector && <Currency />}

        {/* --------- cart -------------- */}

        <div className={styles.cart} ref={cartRef}>
          <div
            className={styles.cartIcon}
            onClick={() => setIsOpenCartStatus(!isOpenCartStatus)}
          >
            <BsCart3 />
          </div>
          {numberItems() > 0 && (
            <div className={styles.numberItemInCard}>{numberItems()}</div>
          )}
          {isOpenCartStatus && <Cart />}
        </div>

        {/* --------- language -------------- */}

        <div
          className={styles.currentLang}
          onClick={() => setIsOpenLangSelector(!isOpenLangSelector)}
          ref={langRef}
        >
          {i18n.language}
        </div>
        {isOpenLangSelector && <Languege />}

        {/* --------- account -------------- */}

        <div
          className={styles.account}
          onClick={() => setIsOpenAccount(!isOpenAccount)}
          ref={accountRef}
        >
          <MdAccountCircle />
        </div>
        {isOpenAccount && <Account />}
      </div>

      {/* --------- MenuBtn -------------- */}

      <div className={styles.closeMenuBtn} onClick={() => setIsOpenMenu(false)}>
        <MdOutlineClose />
      </div>
      <div className={styles.menuBtn} onClick={() => setIsOpenMenu(true)}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;
