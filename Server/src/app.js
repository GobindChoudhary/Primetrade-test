import express from "express";
import userRouter from "./routers/user.route.js";

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);

export default app;
