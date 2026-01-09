import express from "express";
import userAuth from "../middleware/userAuth.middleware.js";
import { createTask } from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/create", userAuth, createTask);

export default taskRouter;
