import styles from "./header.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ShopContext } from "../../../shop-context";
import { PRODUCTS } from "../../../products/Products";

function Cart() {
  const { t } = useTranslation();
  const {
    currency,
    currencyFormat,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    numberItems,
    totalPrice,
    getDefaultCart,
  } = useContext(ShopContext);

  return (
    <div className={styles.cartStatusBox}>
      <h3 className={styles.cartStatus}>
        {t("header.cart.status")} {numberItems()}
      </h3>
      <div className={styles.addedItems}>
        {PRODUCTS.map((addedItem, index) => (
          <li
            key={index}
            className={
              styles.addedItem + (cartItems[addedItem.id] === 0 ? " hide" : "")
            }
          >
            <img
              src={addedItem.img}
              alt="img"
              className={styles.addedItemImg}
            />
            <div className={styles.addedItemInfo}>
              <h3>{addedItem.name}</h3>
              <div className={styles.addedItemPrice}>
                {currencyFormat.format(
                  addedItem.price * currency.conversionRate
                )}
              </div>
              <div className={styles.addedItemQuantity}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => removeFromCart(addedItem.id)}
                >
                  -
                </button>
                {cartItems[addedItem.id]}
                <button
                  className={styles.quantityBtn}
                  onClick={() => addToCart(addedItem.id)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>

      <div className={styles.cartDesc}>
        {numberItems() === 0 ? (
          t("header.cart.description")
        ) : (
          <div className={styles.cartDescWrapper}>
            <div>
              {t("total")}
              {currencyFormat.format(totalPrice() * currency.conversionRate)}
            </div>
            <button
              className={styles.clearCartBtn}
              onClick={() => setCartItems(getDefaultCart())}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
