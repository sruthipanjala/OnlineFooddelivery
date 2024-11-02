import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [initialFoodList, setInitialFoodList] = useState([]);

  // Shuffle the food list when component mounts
  useEffect(() => {
    const shuffleList = () => [...food_list].sort(() => Math.random() - 0.5);
    setInitialFoodList(shuffleList());
  }, [food_list]);

  // Sort and filter the food list based on user selection
  const getFilteredFoodList = () => {
    return initialFoodList.filter((item) => 
      category === "All" || category === item.category
    );
  };

  return (
    <div className="food_display" id="food-display">
      <h2 color="Red">Explore Your Favorite Foods</h2>
      
      <div className="food-display-list">
        {getFilteredFoodList().map((item) => (
          <FoodItem
            key={item._id} // Using _id as the unique key
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
