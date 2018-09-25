module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
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
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  return Items;
};
