import { createContext, useState } from "react";
import { PRODUCTS } from "./products/Products";

const ShopContext = createContext();

function ShopProvider(props) {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$",
    conversionRate: 1,
  });

  const numberItems = () => {
    let numberItems = 0;

    for (let i = 1; i < PRODUCTS.length; i++) {
      numberItems += cartItems[i];
    }
    return numberItems;
  };

  const totalPrice = () => {
    let totalPrice = 0;

    for (let i = 1; i < PRODUCTS.length; i++) {
      totalPrice += PRODUCTS[i - 1].price * cartItems[i];
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
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    numberItems,
    totalPrice,
    getDefaultCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider };
