import React, { useContext } from 'react';
import { DrinksContext } from './DrinksProvider';
import { CartContext } from './CartProvider';
import WordSearch from './WordSearch';

import Nav from './Nav';

const Drink = (props) => {
  const [drinks, setDrinks] = useContext(DrinksContext);
  const [CartData, setcartData] = useContext(CartContext);
  const filteredDrink = drinks.filter(m => m.title.toLowerCase().includes(props.word.toLowerCase()));
  const addtoCart = event => {
    setcartData([...CartData, drinks[event.target.value]]);
    alert('Added to the Cart');
  };
  
  return (
    <div>
    
    
    <h1>Drinks</h1>
      {filteredDrink.map((dr, id) => (
      
         <div className="style">
          <img height="100px" width="100px" src={dr.img} />
          <ul className="snack">

            <li> {dr.title}</li>
            <li>Rs.{dr.price}</li>


          <button onClick={addtoCart} value={id}>
            Add to Cart
          </button>
        </ul>
        </div>
      ))}
    </div>
  );
};
export default WordSearch(Drink);
