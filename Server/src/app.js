import express from "express";
import userRouter from "./routers/user.route.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routers/task.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

export default app;
