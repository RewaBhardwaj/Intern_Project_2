import React from 'react'
import FoodList from './Component/FoodList'
export default function App() {
  
    const fooditems= [ 
      // "Pizza","Pink Pasta","Burger", "Fries", "Noodles"
    ];
      return <FoodList item={fooditems} />;
    
  
}
