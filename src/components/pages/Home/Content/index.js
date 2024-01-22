import styles from "./Content.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.item1}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>{t("home.content.item1")}</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item2}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>{t("home.content.item2")}</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item3}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>{t("home.content.item3")}</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item4}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>{t("home.content.item4")}</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
      <div className={styles.item5}>
        <a href="/" className={styles.itemBtn}>
          <p className={styles.btnTitle}>{t("home.content.item5")}</p>
          <div className={styles.btnArrow}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Content;
