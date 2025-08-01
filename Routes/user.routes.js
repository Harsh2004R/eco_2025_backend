import express, { json } from "express";
import { userGetController,userRegistration } from "../Controllers/userController.js";



const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/login", userGetController);
userRouter.post("/register", userRegistration);


















export default userRouter;













