import FoodModel from "../models/FoodModel.js";

// Add a new food item
export const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Validate input fields
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Get the image path if uploaded
    const imagePath = req.file ? req.file.path : null;

    // Create a new food item in the database
    const newFood = new FoodModel({
      name,
      description,
      price,
      category,
      image: imagePath,
    });

    await newFood.save();
    res.status(201).json({ message: "Food item added successfully", food: newFood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding food item" });
  }
};

// Fetch all food items
export const getFoods = async (req, res) => {
  try {
    const foodItems = await FoodModel.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching food items" });
  }
};
