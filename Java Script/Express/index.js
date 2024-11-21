const express = require("express");
const app = express();
app.use(express.json());
// For assigment timer for time took all the middlewares;

function logTimer(req, res, next) {
  res.on("finish", () => {
    const loger = Date.now() - req.timer;
    console.log(loger);
  });
  next();
}
function userMiddleWears(req, res, next) {
  req.timer = Date.now();
  if (
    req.headers.username != "karthikeya" ||
    req.headers.password != "Wish234"
  ) {
    res.status(403).json({ msg: "Can't find the user" });
  } else {
    next();
  }
}
function kidneyMiddleWear(req, res, next) {
  if (req.query.kidneyId != 1 && req.query.kidneyId != 2) {
    res.status(403).json({
      msg: "Something is wrong [Can't define more than 2 or lestt than 0 inputs]",
    });
  } else {
    next(); // it is used to pass to the next function same as then but here we can move the chain to the next fucntion to exicute the code;
  }
}
app.get(
  "/network-getinput",
  userMiddleWears,
  kidneyMiddleWear,
  logTimer,
  (req, res) => {
    res.json({
      msg: `Your Kidneys are fine`,
    });
  }
);

// ~ Global catch ; -> uses four arrguments in order to check the inputs validation; ,
// ~ instead of writing lines and lines of code we can simply write only one global catch for input validation
// Only works for input validation;

app.use((err, req, res, next) => {
  res.json({ msg: "Sorry something up with the server" });
});
app.listen(3000);

// ^ trail and error section for the section
function trailAndError() {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "karthikeya" || password != "Wish234") {
    res.status(403).json({
      msg: "Don't find the user",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Something wrong with your inputs",
    });
    return;
  }
}
// ^ trail and error section for the section
