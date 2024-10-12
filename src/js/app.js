const express = require("express");
const morgan = require("morgan");
const myConn = require("express-myconnection");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set(
  "views",
  "C:/Users/valsistes01/Desktop/Fran/PROYECTOS/gestor-ccf-js/src/views"
);

//Middlewares
app.use(morgan("dev"));

//MySQL Conn

app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
