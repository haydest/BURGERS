
var express = require("express");
var app = express();
app.use(express.static("public"));

var routes = require("./controllers/burgerController.js");
app.use(routes);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
