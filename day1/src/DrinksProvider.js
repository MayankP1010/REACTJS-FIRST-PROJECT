import React,{createContext,useState} from 'react'

export const DrinksContext =createContext();
export const DrinksProvider=props=>
{
  const [drinks, setdrinks]=useState([

	{
		id:1,
		title:"Cola",
		img:"https://5.imimg.com/data5/EQ/UU/IR/SELLER-107310956/1l-coca-cola-cold-drink-500x500.jpg",
		price:"Rs.40"
	  },
	  {
		id:2,
		title:"Frooti",
		img:"https://www.spero.co.in/uploads/products_preloaded/thumb/200966.jpg",
		price:"Rs.100"
	  },
	  {
		id:3,
		title:"Appy",
		img:"https://5.imimg.com/data5/WL/LK/MY-48969557/appy-fizz-sparkling-apple-juice-drink-2c1-lt-bottle-500x500.png",
		price:"Rs.100"
	  }
]);

  return(
   <DrinksContext.Provider value={[drinks, setdrinks]}>
   {props.children}
   </DrinksContext.Provider>
  );
}
export default DrinksProvider;