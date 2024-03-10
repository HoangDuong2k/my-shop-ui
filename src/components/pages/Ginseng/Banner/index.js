import styles from "../../Banner.module.css";
import bannerImg from "../../../../assets/images/ginseng.webp";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src={bannerImg} className={styles.img} alt="Ginseng" />
      <h1 className={styles.header}>{t("ginseng.header")}</h1>
    </div>
  );
}

export default Banner;
