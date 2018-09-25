var db = require("../models");

module.exports = function(app) {
  // Load index page
  
  app.get("/", function(req, res) {
    db.Diets.findAll({}).then(function(items) {
      res.render("index", {
        msg: "Welcome!",
        diets: dbDiets
      });
    });
  });

  // Load example page and pass in an example by id
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
    
      });
  })


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

}