var express = require("express");

var router = express.Router();

// Import the model (diets.js) to use its database functions.
var diets = require("../models/diets.js");

app.get("/items", function(req, res){
    db.Items.findAll({ 
        where: 
        { name: req.params.categories }
    })
    .then
    (function(dbDiets) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     diets: dbDiets
    //   });
    console.log(dbDiets)
  });

  // do 4 fx one for each diet 
  // console.log