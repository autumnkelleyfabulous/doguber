// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dogs = {
  selectAll: function(cb) {
    orm.selectAll("dog_info", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("dog_info", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("dog_info", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = dogs;


// / "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
