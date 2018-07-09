var express = require("express");
var method = require("method-override");
var bodyParser = require("body-parser");
const routes = require("./routes");

var port = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/closet_controller.js");

// app.use(routes);

app.listen(port);