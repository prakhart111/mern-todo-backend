const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", TodoListSchema);

module.exports = Todo;
