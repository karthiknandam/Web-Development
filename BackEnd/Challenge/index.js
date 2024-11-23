const { json } = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  const finder = ALL_USERS.some(
    (user) => username === user.username && password === user.password
  );
  return finder;
}

app.post("/sign-in", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.json({
      msg: "Invalid Details",
    });
  }
  const token = jwt.sign({ username, password }, jwtPassword);
  res.send({
    token,
  });
});
app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const user = jwt.verify(token, jwtPassword);
    const details = user.username;
    res.send({
      data: "Remaining users",
      users: ALL_USERS.filter((user) => user.username != details),
    });
  } catch (err) {
    res.json({
      msg: "Invalid Token",
    });
  }
});

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   req.headers.authorization = token;
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     console.log(decoded);
//     const username = decoded.username;
//     res.json({
//       array: ALL_USERS.filter((user) => user !== username),
//     });
//     // return a list of users other than this username
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

app.listen(3000);
