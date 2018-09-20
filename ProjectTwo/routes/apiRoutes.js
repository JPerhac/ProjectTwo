var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Diet.findAll({}).then(function(dbDiets) {
      res.json(dbDiets);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Diet.create(req.body).then(function(dbDiets) {
      res.json(dbDiets);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Diet.destroy({ where: { id: req.params.id } }).then(function(dbDiets) {
      res.json(dbDiets);
    });
  });
};
