import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import configCors from "./config/CORS";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
//config cors
configCors(app);
//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection db
// connection();

initApiRoutes(app);

app.listen(PORT, () => {
    console.log(">>> React Ultimate Backend is running on the port = " + PORT);
});
