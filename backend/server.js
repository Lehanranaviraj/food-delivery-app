import express from "express";
import { connectDB } from "./config/db.js"; // Adjust the path to where `db.js` is located
import foodRouter from "./routes/foodRoute.js";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/foods", foodRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
