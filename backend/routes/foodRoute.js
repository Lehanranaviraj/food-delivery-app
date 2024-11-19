import express from "express";
import { addFood, getFoods } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine for uploading food images
const storage = multer.diskStorage({
  destination: "uploads", // Ensure this folder exists
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// POST endpoint: Add a new food item
foodRouter.post("/add", upload.single("image"), addFood);

// GET endpoint: Fetch all food items
foodRouter.get("/", getFoods); // Fetches all food items from the database

export default foodRouter;
