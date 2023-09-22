import app from "./app";
import getConnection from "./database/connection";

const port = app.get('port');
app.listen(port);

console.log("Server on port: ", port);
getConnection().catch(err=>console.log(err));