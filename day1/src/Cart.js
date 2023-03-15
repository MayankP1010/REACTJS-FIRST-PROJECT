import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartProvider';
import Nav from './Nav';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log('cc', cart);
  useEffect(() => {}, [cart]);

  const RemoveCartItem = e =>{
    let newvalue = parseInt(e.target.value);
    let newArray = [...cart];
    let indx = newArray.indexOf(newvalue);
    newArray.splice(indx,1);
    setCart(newArray);
}

  return (
    <div >
   
   {/* <Nav/> */}
      {cart.length === 0 ? (
        <h1>Your Cart is Empty</h1>
      ) : (
        cart.map((c, i) => (
         <div className="style">
          <img height="100px" width="100px" src={c.img} />
          <ul className="Meals">

            <li>{c.title}</li>
            <li>Rs.{c.price}</li>

       
          </ul>
          {''}
            <button className="btn-remove" onClick={RemoveCartItem}>
                Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};
export default Cart;
