import styles from "./Banner.module.css";
import bannerVideo from "../../../../assets/images/hero-video.mp4";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <video className={styles.video} autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <h1 className={styles.slogan}>
        {t("home.banner.title")} <span>{t("home.banner.span")}</span>
      </h1>
    </div>
  );
}

export default Banner;
