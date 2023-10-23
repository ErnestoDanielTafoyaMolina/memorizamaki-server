import app from "./app";
import "./database/connection";

const port = app.get('port');
app.listen(port);

console.log("Server on port: ", port);

  