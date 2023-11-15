const Person = require("../models/Person");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "write one name" });
    return;
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

//READ
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: "people not found" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    res.status(200).json(person);
  } catch (error) {
    res.status(422).json({ message: "person not found" });
  }
});

//UPDATE (Put, Patch)

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, salary, approved } = req.body;
  const person = {
    name,
    salary,
    approved,
  };
  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);
    res.status(200).json(person);
  } catch (error) {
    res.status(422).json({ message: "fail to update" });
  }
});

//Delete

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: "person deleted successfully!" });
  } catch (error) {
    res.status(422).json({ message: "person not found!" });
  }
});

module.exports = router;
