const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username,
    password,
  });
  res.json({
    msg: "Admin Created Succesfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const details = req.body.details;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    details,
    imageUrl,
    price,
  });

  res.json({
    msg: "Course Created Succesfully",
    id: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const allCourses = await Course.find({});
  res.json({
    allCourses,
  });
});

module.exports = router;
