const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json());
app.get("/", function (req, res) {
  res.send("Hello from node api");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:mmbnVN2cPexyKuKE@applicationmern.hl0snly.mongodb.net/mernapplication?retryWrites=true&w=majority&appName=applicationmern"
  )
  .then(() => {
    console.log("The database is connected");
    app.listen(3000, () => {
      console.log("tushar aher");
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });
