import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducer";
import ProductList from '../assets/data.json'

const Cart = createContext();

const Context = ({ children }) => {
  const products = ProductList;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;