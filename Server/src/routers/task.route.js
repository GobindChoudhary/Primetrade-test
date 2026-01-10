import express from "express";
import userAuth from "../middleware/userAuth.middleware.js";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/", userAuth, createTask);
taskRouter.get("/", userAuth, getAllTasks);
taskRouter.put("/:id", userAuth, updateTask);
taskRouter.delete("/:id", userAuth, deleteTask);

export default taskRouter;
