import express  from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { port } from "./config";

//importacion de rutas propias
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";

const app = express();
app.set('port',port);

app.use(morgan("dev"));
app.use(cors({
    credentials:true,
    origin:"http://127.0.0.1:5500"
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

// rutas propias
app.use("/api",authRoutes);
app.use("/api",userRoutes)


export default app;