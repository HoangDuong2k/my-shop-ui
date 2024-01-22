import styles from "./header.module.css";
import { useTranslation } from "react-i18next";

function Languege() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.langList}>
      <div className={styles.lang} onClick={() => i18n.changeLanguage("en")}>
        En
      </div>
      <div className={styles.lang} onClick={() => i18n.changeLanguage("vi")}>
        Vi
      </div>
    </div>
  );
}

export default Languege;
