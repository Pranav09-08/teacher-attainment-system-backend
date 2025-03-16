const Student = require("../../models/admin/studentModel");

// Upload students via JSON (not file)
const uploadStudents = async (req, res) => {
  try {
    const { students } = req.body;

    // Validate input: Ensure students is a non-empty array
    if (!students || !Array.isArray(students) || students.length === 0) {
      return res.status(400).json({ error: "Invalid input: students must be a non-empty array" });
    }

    // Validate each student object
    const requiredFields = ["roll_no", "name", "email", "mobile_no", "class", "academic_yr", "dept_id"];
    for (const student of students) {
      const missingFields = requiredFields.filter((field) => !student[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          error: `Missing required fields for student: ${missingFields.join(", ")}`,
        });
      }
    }

    // Insert students into the database
    await Student.insertStudents(students);

    res.status(201).json({ message: "✅ Students added successfully!" });
  } catch (err) {
    console.error("❌ Error inserting students:", err);

    if (err.code === 11000) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: "Duplicate entry: A student with the same roll number already exists." });
    }

    if (err.name === "ValidationError") {
      // Mongoose validation error
      return res.status(400).json({ error: `Validation Error: ${err.message}` });
    }

    // Handle generic errors
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
};

module.exports = { uploadStudents };
