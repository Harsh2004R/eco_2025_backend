import express from "express";
import { userLoginController, userRegistration } from "../Controllers/userController.js";



const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/login", userLoginController);
userRouter.post("/register", userRegistration);


















export default userRouter;













