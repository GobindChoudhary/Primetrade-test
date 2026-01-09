import express from "express";
import {
  userLogoutController,
  userLoginController,
  userRegisterController,
} from "../controllers/userAuth.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.post("/logout", userLogoutController);
export default userRouter;
