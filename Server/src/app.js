import express from "express";
import userRouter from "./routers/user.route.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routers/task.route.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

export default app;
