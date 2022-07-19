const express = require("express");

const router = express.Router();

const {
  listAllTodo,
  createOneTodo,
  findOneTodo,
  updateOneTodo,
  deleteTodo,
} = require("../controllers/controllers.js");

router.get("/", listAllTodo);

router.get("/:id", findOneTodo);

router.post("/", createOneTodo);

router.put("/:id", updateOneTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
