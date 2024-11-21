const express = require("express");
const zod = require("zod");
const app = express();
// instantiating the zod to the new varible and sending this to the zod test cases;
const schema = zod.array(zod.number());
const schema2 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});
app.use(express.json());
app.get("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const obj = req.body.obj;
  const requires = schema.safeParse(kidneys);
  const userCheck = schema2.safeParse(obj);
  //   if (!requires.success) {
  //     res.status(403).json({
  //       msg: "Invalid input is sent",
  //     });
  //     return;
  //   }
  res.json({
    userCheck,
  });
});

app.listen(3000);
