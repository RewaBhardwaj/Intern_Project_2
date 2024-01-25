import React from 'react'
import FoodList from './Component/FoodList'
import "./App.css"
export default function App() {
  
    const fooditems= [ 
       "Pizza","Pink Pasta","Burger", "Fries", "Noodles"
    ];
      return <FoodList item={fooditems} />;
    
  
}
