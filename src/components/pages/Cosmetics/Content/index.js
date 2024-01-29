import styles from "./Content.module.css";
import { COSMETICSPRODUCTS } from "../../../../products/CosmeticProducts";
import { useContext } from "react";
import { ShopContext } from "../../../../shop-context";
import { useTranslation } from "react-i18next";

function Content() {
  const { currency, currencyFormat, addToCart, setShowSnackBar } =
    useContext(ShopContext);
  const { t } = useTranslation();

  function handleClickAdd(id) {
    addToCart(id);
    setShowSnackBar(true);
    setTimeout(() => setShowSnackBar(false), 1000);
  }

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
              {currencyFormat.format(item.price * currency.conversionRate)}
            </p>
            <button
              className={styles.addToCartBtn}
              onClick={() => handleClickAdd(item.id)}
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
