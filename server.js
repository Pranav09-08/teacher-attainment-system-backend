const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
<<<<<<< HEAD
const authLoginRoute = require("./routes/authLoginRoute"); // Login route
const facultyRoute = require('./routes/profileRoute');
const courseRoute =require('./routes/coursesRoute');
const facultRoute2 =require('./routes/courseAllotmentRoute');
=======

const authLoginRoute = require("./routes/authLoginRoute");      // ✅ Login Route
const facultyRoute = require('./routes/profileRoute');          // ✅ Profile Route
const dashboardRoutes = require("./routes/dashboardAuth");    // ✅ Dashboard Route
const adminRoutes = require('./routes/adminRoute');           //Admin Route

>>>>>>> origin/dipali

const app = express();

// ✅ Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

<<<<<<< HEAD
// Define API routes
app.use("/auth", authLoginRoute);
app.use("/profile", facultyRoute);
app.use("/courses", courseRoute);
app.use("/faculty_courses",facultRoute2);
=======
// ✅ API Routes
app.use("/auth", authLoginRoute);         // Authentication Route (Login)
app.use("/profile", facultyRoute);        // Profile Route
app.use("/dashboard", dashboardRoutes);   // Protected Dashboard Routes (with roles)
app.use("/admin",adminRoutes);            // admin Route
>>>>>>> origin/dipali

// ✅ Example route for testing
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// ✅ Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log("✅ Database Connected Successfully");
});
