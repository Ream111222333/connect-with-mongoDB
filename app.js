const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const apiRoutes = require("./routes/apiRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set("view engine", "ejs");

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.use("/", userRoutes);
app.use("/api", apiRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <a href="/">Go Back Home</a>
  `);
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`
====================================
🚀 Server Started Successfully
🌍 URL: http://localhost:${PORT}
📦 Environment: Development
====================================
  `);
});