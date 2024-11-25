const express = require("express");
const morgan = require("morgan");
const myConn = require("express-myconnection");
const { engine } = require("express-handlebars");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.set("port", 4000);

app.set("views", __dirname + "../views");

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Validando que se ejecute correctamente la app
app.listen(app.get("port"), () => {
  console.log("Listen on port: ", app.get("port"));
});

//ESTA PARTE CORRESPONDE AL REGISTRO
// // Settings
// app.set("port", process.env.PORT || 3000);

// app.set("view engine", "ejs");
// app.set(
//   "views",
//   "C:/Users/valsistes01/Desktop/Fran/PROYECTOS/gestor-ccf-js/src/views"
// );

// //Middlewares
// app.use(morgan("dev"));

// //MySQL Conn

// app.listen(app.get("port"), () => {
//   console.log("Server on port 3000");
// });
