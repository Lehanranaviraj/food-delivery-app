import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Path to the uploaded image
    required: false,
  },
});

const FoodModel = mongoose.model("Food", FoodSchema);

export default FoodModel;
