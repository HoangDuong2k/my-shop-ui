import styles from "./Banner.module.css";
import bannerVideo from "../../../../assets/images/hero-video.mp4";

function Banner() {
  return (
    <div className={styles.wrapper}>
      <video className={styles.video} autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <h1 className={styles.slogan}>
        Building a better <span>you!</span>
      </h1>
    </div>
  );
}

export default Banner;
