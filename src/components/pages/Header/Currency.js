import styles from "./header.module.css";
import { CURRENCYLIST } from "../../../assets/images/CurrencyList";
import { useContext } from "react";
import { ShopContext } from "../../../shop-context";

function Currency() {
  const { setCurrency } = useContext(ShopContext);

  return (
    <div className={styles.currencyList}>
      {CURRENCYLIST.map((item) => (
        <div
          key={item.name}
          className={styles.currency}
          onClick={() => setCurrency(item)}
        >
          {item.symbol} {item.name}
        </div>
      ))}
    </div>
  );
}

export default Currency;
