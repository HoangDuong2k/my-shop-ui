import styles from "./Banner.module.css";
import bannerImg from "../../../../assets/images/houseware.jpg";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src={bannerImg} className={styles.img} alt="Houseware" />
      <h1 className={styles.slogan}>{t("houseware.banner")}</h1>
      <h1 className={styles.header}>{t("houseware.header")}</h1>
    </div>
  );
}

export default Banner;
