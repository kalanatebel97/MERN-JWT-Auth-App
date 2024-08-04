import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api',router)

app.listen(PORT,()=>console.log(`Server is listening to port : ${PORT}`));