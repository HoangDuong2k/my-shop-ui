import styles from "./header.module.css";

function Cart() {
  return (
    <div className={styles.cartStatusBox}>
      <p className={styles.cartStatus}>
        My cart, <span>0 items</span>
      </p>
      <p>Looks like you haven't added anything to your cart yet</p>
    </div>
  );
}

export default Cart;
