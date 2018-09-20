module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    product: {
      type: DataTypes.STRING
    },
    calories: { 
      type: DataTypes.INTEGER
    },
    categories: { 
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    },
    productId: {
      type: DataTypes.INTEGER
    }
});
  return items;
};