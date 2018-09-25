var db = require("../models");

// Import the model (diets.js) to use its database functions.
module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Diets.findAll({}).then(function (items) {
      res.json(items);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Diet.create(req.body).then(function (items) {
      res.json(items);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Diet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (items) {
      res.json(items);
    });

  });


  app.get("/api/items/:categories", function (req, res) {
    db.Items.findAll({
        where: {
          categories: req.params.categories
        }
      })
      .then(function (items) {
          res.render("items", {
            msg: "Welcome!",
            diets: items
          });
        // console.log(items + "items are")
        res.json(items);
      });
  })
}



// do 4 fx one for each diet 
// console.log
