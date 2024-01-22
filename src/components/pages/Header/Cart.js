import styles from "./header.module.css";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation();

  return (
    <div className={styles.cartStatusBox}>
      <p className={styles.cartStatus}>{t("header.cart.status")}</p>
      <p>{t("header.cart.description")}</p>
    </div>
  );
}

export default Cart;
