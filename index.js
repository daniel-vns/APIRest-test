//initial config
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

//read JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//create initial endpoint
app.get("/", (req, res) => {
  res.json({ message: "hello express!" });
});

//PORT
mongoose
  .connect(
    "mongodb+srv://daniel:daniel123@apicluster.g7se9jl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
