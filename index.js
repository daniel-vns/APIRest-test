//initial config
const express = require("express");
const app = express();
const Person = require("./models/Person");
const mongoose = require("mongoose");

//read JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//API routes
app.post("/person", async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "write one name" });
  }

  const person = {
    name,
    salary,
    approved,
  };

  try {
    await Person.create(person);
    res.status(201).json({ message: "person created successsfully!!!" });
  } catch (error) {
    console.error("error creating person", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//create initial endpoint
app.get("/", (req, res) => {
  res.json({ message: "hello express!!!" });
});

//PORT
mongoose
  .connect(
    "mongodb+srv://daniel:daniel123@cluster0.9dnbpuk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
