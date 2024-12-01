const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user2000:test234@cluster0.lahwe.mongodb.net/todo-app"
);
// creating the connect and Schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todos = mongoose.model("todos", todoSchema);
module.exports = {
  todos,
};
