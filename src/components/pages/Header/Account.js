import { useTranslation } from "react-i18next";
import styles from "./header.module.css";

function Account() {
  const { t } = useTranslation();

  return (
    <div className={styles.accountWrapper}>
      <div className={styles.accountInfo}>{t("header.account.status")}</div>
      <div className={styles.accountBtn}>
        <button className={styles.loginBtn}>{t("header.account.login")}</button>
        <button className={styles.signupBtn}>
          {t("header.account.signup")}
        </button>
      </div>
    </div>
  );
}

export default Account;
