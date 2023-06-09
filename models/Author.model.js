const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    name: String,
    age: Number,
    country: String,
  },
  {
    timestamp: true,
  }
);

const Author = model("Author", authorSchema);

module.exports = Author;
