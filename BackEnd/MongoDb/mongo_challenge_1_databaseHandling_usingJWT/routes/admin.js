const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
// import { passKey } from "../index";
const passKey = require("../privateKeys/keys");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db/index");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const JWTtoken = `Bearer ${jwt.sign({ username }, passKey)}`;
  const finder = await Admin.findOne({
    username: username,
    password: password,
  });
  if (finder) {
    await Admin.create({ username, password });
    return res.json({
      msg: "User Already Existed Here is the token",
      token: JWTtoken,
    });
  }
  res.json({
    token: JWTtoken,
    msg: "User Created Succesfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const JWTtoken = `Bearer ${jwt.sign({ username }, passKey)}`;
  res.set("auth", JWTtoken);
  const finder = Admin.findOne({
    username: username,
    password: password,
  });
  if (finder) {
    res.json({
      token: JWTtoken,
    });
  } else {
    res.json({
      msg: "Wrong user Credentials",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const course = await Course.create({
    title,
    description,
    imageUrl,
    price,
  });
  res.json({
    msg: "Course updated Succesfuly",
    _id: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

module.exports = router;
