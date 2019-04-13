
var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/dog_owners.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});




// require("dotenv").config();


// var express = require("express");
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');

// var port = process.env.PORT || 3000;

// var app = express();

// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// app.use(methodOverride("_method"));

// var exphbs = require("express-handlebars");

// // Middleware






// app.use(express.urlencoded({ 
//   extended: false }));
// app.use(express.json());



// // Handlebars
// app.engine("handlebars", exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// app.get('/', function (req, res) {
//    res.redirect("/index.html")
//   });

// Routes
// var routes = require("./controllers/dog_owners.js");
// app.use(routes);
// app.listen(port, function() {
//   console.log(
//   "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.")
// })
// var routes = require("./routes/apiRoutes");
// var routes = require("./routes/htmlRoutes");



// app.use(app.router);
// routes.initialize(app);
// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(port, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       port,
//       port
//     );
//   });
// });

// module.exports = app;
