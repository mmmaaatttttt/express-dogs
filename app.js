const express = require("express");
const Dog = require("./models/Dog");

const app = express();
app.use(express.json());

app.get("/dogs", async function(req, res) {
  const dogs = await Dog.all();
  return res.json({ dogs });
});

app.post("/dogs", async function(req, res) {
  const newDog = await Dog.create(req.body.dog);
  return res.json({ dog: newDog });
});

app.listen(3000, function() {
  console.log("App on port 3000");
});
