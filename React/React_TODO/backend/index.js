const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
app.use(express.json());
app.use(cors());
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you return the wrong inputs",
    });
    return;
  }
  //   put it in the mongo db

  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo is created",
  });
});

app.get("/todo", async (req, res) => {
  const todo = await todos.find({});
  res.json({
    todo,
  });
});

app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const parsedUpdatedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedUpdatedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todos.updateOne(
    {
      _id: updatedPayload.id,
    },
    {
      $set: {
        completed: true,
      },
    }
  );
  res.json({
    msg: "Todo is marked as done",
  });
});
app.listen(3000);
// write a basic boiler plate of the express
// with the express.json() middleware
