//initial config
const express = require("express");
const app = express();

const mongoose = require("mongoose");

//read JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//API routes

const personRoutes = require("./routes/person.Routes");

app.use("/person", personRoutes);

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
