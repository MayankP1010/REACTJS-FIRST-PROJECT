import React, {createContext, useState } from 'react';

export const MealsContext = createContext();

export const MealsProvider = props => {
  const [MealsData, setMealsData]= useState(
   [

	{
		"id":1,
		"img":"https://d1ralsognjng37.cloudfront.net/3fb508ab-3669-4601-a4e4-0b79144719ef",
		"title":"Pizza",
		"price":"40"
	},

	{
		"id":2,
		"img":"https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
		"title":"Idli-Sambar",
		"price":"60"
	},

	
	{
		"id":3,
		"img":"https://media-cdn.tripadvisor.com/media/photo-s/07/85/4f/1e/haldirams-that-bart.jpg",
		"title":"Thali",
		"price":"100"
	}
]
  );

return(
  <MealsContext.Provider value={[MealsData,setMealsData]}>
  {props.children}
  </MealsContext.Provider>
)


};