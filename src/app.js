import express  from "express";
import morgan from "morgan";
import cors from "cors";
import { port } from "./config";

const app = express();
app.set('port',port);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());



export default app;