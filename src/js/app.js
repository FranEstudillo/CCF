const express = require("express");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));
console.log(__dirname);
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
  console.log(__dirname + "../");
});
