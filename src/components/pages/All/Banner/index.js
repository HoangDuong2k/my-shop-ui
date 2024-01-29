import styles from "./Banner.module.css";
import bannerImg from "../../../../assets/images/all.jpg";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src={bannerImg} className={styles.img} alt="All products" />
      <h1 className={styles.header}>{t("all.header")}</h1>
    </div>
  );
}

export default Banner;
