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

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const value = { currency, setCurrency, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider };
