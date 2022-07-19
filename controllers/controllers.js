const AppTodo = require("../models/models.js");

exports.createOneTodo = (req, res) => {
  AppTodo.create(req.body)
    .then((todo) => {
      res.json({
        message: "Successfully added TODO",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Unable to add TODO",
        error: err.message,
      });
    });
};

exports.listAllTodo = (req, res) => {
  AppTodo.find()
    .then((todo) => {
      console.log({ todo });
      res.json(todo);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any todo available", error: err.message });
    });
};

exports.findOneTodo = (req, res) => {
  AppTodo.findById(req.params.id)
    .then((todo) => {
      return res.json({
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Cannot find specific",
        error: err.message,
      });
    });
};

exports.updateOneTodo = (req, res) => {
  AppTodo.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => {
      return res.json({
        message: "Cheers!! You have successfully updated TODO",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your todo list cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteTodo = (req, res) => {
  AppTodo.findByIdAndRemove(req.params.id, req.body)
    .then((todo) => {
      res.json({
        message: "Cheers!! You have successfully deleted your TODO",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your todo is not there",
        error: err.message,
      });
    });
};
