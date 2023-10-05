import express  from "express";
import morgan from "morgan";
import cors from "cors";
import { port } from "./config";

//importacion de rutas propias
import authRoutes from "./routes/auth.routes";

const app = express();
app.set('port',port);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// rutas propias
app.use("/api",authRoutes);


export default app;