// Import the model (burger.js) to use its database functions.


var express = require("express");
var router = express.Router();

var dogs = require("../models/dogs.js");


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    dogs.selectAll(function(data) {
        var hbsObject = {
            dog_info: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });

      router.post("/dog_info", function(req, res) {
        dogs.create([
           "dog_name, first_name, last_name, addres, email"
         ], [
           req.body.dog_name
         ], function(data) {
           // Send back the ID of the new quote
           res.redirect("/");
         });
       });

       router.put("/dog_info/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
      //   console.log("condition", condition);
      
        dogs.update({
          present: true
        }, condition, function(data) {
            res.redirect("/");
        });
      });

    //    router.get("*", function(req, res) {
    //     res.render("404");
    //   });
    
    
    module.exports = router;