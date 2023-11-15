//initial config
const express = require("express");
const app = express();

//read JSON / middlewares
app.use(
  express.urlencoded({
    extnded: true,
  })
);

app.use(express.json());

//create initial endpoint
app.get("/", (req, res) => {
  res.json({ message: "hello express!" });
});

//PORT
app.listen(3000);
