import React, { useContext } from 'react';
import { MealsContext } from './MealsProvider';
import Nav from './Nav.js';
import { CartContext } from './CartProvider';
import WordSearch from './WordSearch';

const Meals = props => {
  const [MealsData, setMealsData] = useContext(MealsContext);
  const [CartData, setcartData] = useContext(CartContext);
   const filteredMeals = MealsData.filter(m => m.title.toLowerCase().includes(props.word.toLowerCase()));

  const addtoCart = event => {
    setcartData([...CartData, MealsData[event.target.value]]);
    alert('Added to the Cart');
  };

  return (
    <div>
     
      <h1>Meals</h1>

      {filteredMeals.map((Meals, id) => (
        <div className="style">
          <img height="100px" width="100px" src={Meals.img} />
          <ul className="Meals">
            <li> {Meals.title}</li>
            <li>Rs.{Meals.price}</li>

            <button onClick={addtoCart} value={id}>
              Add to Cart
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WordSearch(Meals);
