import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening to port : ${PORT}`));
