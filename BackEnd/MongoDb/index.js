const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://user2000:test234@cluster0.lahwe.mongodb.net/user_details"
);
const User = mongoose.model("users", {
  email: String,
  password: String,
});
app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    email: email,
    password: password,
  });
  const userFind = await User.findOne({ email: email });
  if (userFind) {
    return res.json({
      msg: "User already exist",
    });
  }
  user.save();
  const token = jwt.sign({ email, password }, jwtPassword);
  res.json({ msg: "updated succesfully", token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const bearer = jwt.verify(token, jwtPassword);
    const email = bearer.email;
    return res.json({
      msg: "Hello mowa",
      email,
    });
  } catch (err) {
    return res.status(400).json({
      msg: "Server Error",
    });
  }
});

function testCase() {
  // const User = mongoose.model("User", {
  //   name: String,
  //   username: String,
  //   pasword: String,
  // });
  // const app = express();
  // app.use(express.json());
  // function userExists(username, password) {
  //   // should check in the database
  // }
  // app.post("/signin", async function (req, res) {
  //   const username = req.body.username;
  //   const password = req.body.password;
  //   if (!userExists(username, password)) {
  //     return res.status(403).json({
  //       msg: "User doesnt exist in our in memory db",
  //     });
  //   }
  //   var token = jwt.sign({ username: username }, "shhhhh");
  //   return res.json({
  //     token,
  //   });
  // });
  // app.get("/users", function (req, res) {
  //   const token = req.headers.authorization;
  //   try {
  //     const decoded = jwt.verify(token, jwtPassword);
  //     const username = decoded.username;
  //     // return a list of users other than this username from the database
  //   } catch (err) {
  //     return res.status(403).json({
  //       msg: "Invalid token",
  //     });
  //   }
  // });
}
app.listen(3000);
