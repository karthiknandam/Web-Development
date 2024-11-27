const { Router } = require("express");
const router = Router();
const passKey = require("../privateKeys/keys");
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const finder = User.findOne({
    username,
    password,
  });
  if (finder) {
    return res.json({
      msg: "User Already exists",
      token: JWTtoken,
    });
  }
  const JWTtoken = `Bearer ${jwt.sign({ username, password }, passKey)}`;
  await User.create({
    username,
    password,
  });
  res.json({
    msg: "User Created Successfully",
    token: JWTtoken,
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const finder = User.findOne({
    username,
    password,
  });
  if (!finder)
    return res.json({
      msg: "Wrong User Credentials",
    });
  const JWTtoken = `Bearer ${jwt.sign({ username, password }, passKey)}`;
  res.set("auth", JWTtoken);
  res.json({
    msg: "Please Sign in ",
    token: JWTtoken,
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const id = req.params.courseId;
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    const { username, password } = token;
    const finder = await Course.findOne({
      _id: id,
    });
    if (!finder) {
      return res.json({
        msg: "No Course found",
      });
    }
    await User.updateOne(
      {
        username,
        password,
      },
      {
        $push: {
          purchasedCourses: id,
        },
      }
    );
    res.json({
      msg: "Course Purchase Succesfully",
    });
  } catch (err) {
    res.json({
      msg: "Invalid Inputs",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
