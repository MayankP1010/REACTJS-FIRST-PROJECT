import React, {createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [CartData, setCartData]= useState([]);

return(
  <CartContext.Provider value={[CartData, setCartData]}>
  {props.children}
  </CartContext.Provider>
)


};
export default CartProvider;