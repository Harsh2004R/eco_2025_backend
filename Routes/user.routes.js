import express from "express";
import { authTokenValidation } from "../Middlewares/authTokenValidation.js"
import { userLoginController, userRegistration } from "../Controllers/userController.js";



const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/login", userLoginController);
userRouter.post("/register", userRegistration);


















export default userRouter;













