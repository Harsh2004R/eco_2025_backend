import express from "express";
import connection from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routes/user.routes.js"
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/user", userRouter)
app.get("/", (req, res) => {
    res.send("Home...")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    try {
        console.log(`server is live at port :-${PORT}`)
        await connection;
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log(`somthing went wrong with mongo connection -------------------------------------${error}`)
    }
})











