import app from "./app";
import { front } from "./config";
import "./database/connection";

const port = app.get('port');
app.listen(port);

console.log("Server on port: ", port);
console.log("Front end permitido: ", front)
  