import { createContext, useState } from "react";
import { PRODUCTS } from "./products/Products";

const ShopContext = createContext();

function ShopProvider(props) {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
      cart[PRODUCTS[i].id] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [currency, setCurrency] = useState({
    local: "en-US",
    name: "USD",
    symbol: "$",
    conversionRate: 1,
  });
  const currencyFormat = new Intl.NumberFormat(currency.local, {
    style: "currency",
    currency: currency.name,
  });
  const [showSnackBar, setShowSnackBar] = useState(false);

  const numberItems = () => {
    let numberItems = 0;

    for (let i = 0; i < PRODUCTS.length; i++) {
      numberItems += cartItems[PRODUCTS[i].id];
    }
    return numberItems;
  };

  const totalPrice = () => {
    let totalPrice = 0;

    for (let i = 0; i < PRODUCTS.length; i++) {
      totalPrice += PRODUCTS[i].price * cartItems[PRODUCTS[i].id];
    }
    return totalPrice;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const value = {
    currency,
    setCurrency,
    currencyFormat,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    numberItems,
    totalPrice,
    getDefaultCart,
    showSnackBar,
    setShowSnackBar,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider };
