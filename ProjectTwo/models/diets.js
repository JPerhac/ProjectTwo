module.exports = function(sequelize, DataTypes) {
  var Diets = sequelize.define("Diets", {
    diet: {
      type: DataTypes.STRING
    },
    group: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.STRING
    },
    productId: {
      type: DataTypes.INTEGER
    }
  });
  return Diets;
};