import styles from "./header.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ShopContext } from "../../../shop-context";
import { PRODUCTS } from "../../../products/Products";

function Cart() {
  const { t } = useTranslation();
  const { currency, cartItems } = useContext(ShopContext);

  let numberItems = 0;

  for (let i = 1; i < PRODUCTS.length; i++) {
    numberItems += cartItems[i];
  }

  return (
    <div className={styles.cartStatusBox}>
      <p className={styles.cartStatus}>
        {t("header.cart.status")} {numberItems}
      </p>
      {PRODUCTS.map(
        (addedItem, index) =>
          cartItems[addedItem.id] > 0 && (
            <div key={index} className={styles.addedItem}>
              <img
                src={addedItem.img}
                alt="img"
                className={styles.addedItemImg}
              />
              <div className={styles.addedItemInfo}>
                <h3>{addedItem.name}</h3>
                {currency.symbol}
                {addedItem.price}
                <p>{cartItems[addedItem.id]}</p>
              </div>
            </div>
          )
      )}

      <p>{numberItems === 0 && t("header.cart.description")}</p>
    </div>
  );
}

export default Cart;
