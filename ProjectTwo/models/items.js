module.exports = function(sequelize, DataTypes) {
    var items = sequelize.define("items", {
        product: DataTypes.STRING,
        calories: DataTypes.INT,
        categories: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        group: DataTypes.STRING,
        product_id: DataTypes.INT
    });
    return items;
};