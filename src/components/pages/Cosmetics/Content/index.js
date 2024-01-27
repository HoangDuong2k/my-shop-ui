import styles from "./Content.module.css";
import { COSMETICSPRODUCTS } from "../../../../products/CosmeticProducts";
import { useContext } from "react";
import { ShopContext } from "../../../../shop-context";
import { useTranslation } from "react-i18next";

function Content() {
  const { currency, addToCart } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      {COSMETICSPRODUCTS.map((item) => (
        <div key={item.id} className={styles.item}>
          <div
            className={styles.itemImg}
            style={{
              backgroundImage: "url(" + item.img + ")",
            }}
          ></div>
          <div className={styles.itemInfo}>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemPrice}>
              {currency.symbol}
              {Math.round(item.price * currency.conversionRate * 100) / 100}
            </p>
            <button
              className={styles.addToCartBtn}
              onClick={() => addToCart(item.id)}
            >
              {t("add to cart")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
