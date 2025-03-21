const db = require('../../db/db');
const Course = require('../../models/faculty/courseModel');

// Handle GET request for faculty by ID
const getCourses = async (req, res) => {

  try {

    // Fetch faculty using the model
    const results = await Course.getCourses();

    if (results.length === 0) {
      console.log('❗ Course not found');
      return res.status(404).json({ message: 'Course not found' });
    }

    console.log('✅ Course found:', results);
    res.json(results);

  } catch (err) {
    console.error('❌ Error fetching course:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getCourses };