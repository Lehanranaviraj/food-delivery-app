import React, { useEffect, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem.jsx";
import api from "../../utils/api"; // Import the API utility

const FoodDisplay = ({ category }) => {
  const [foodList, setFoodList] = useState([]); // State to hold food items
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from the backend whenever the component mounts or `category` changes
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/foods?category=${category}`);
        setFoodList(response.data); // Update food list with data from the API
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food items:", error);
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is fetched
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {foodList.map((item, index) => (
          <FoodItem
            key={index}
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
