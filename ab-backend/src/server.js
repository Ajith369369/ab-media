const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/connection");
const destinationRoutes = require("./routes/destinationRoutes");
const tourPackageRoutes = require("./routes/tourPackageRoutes");

dotenv.config();

// Create server
const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", destinationRoutes); 
app.use("/api", tourPackageRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
