const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: String,
  salary: Number,
  approved: Boolean,
});

module.exposts = Person;
