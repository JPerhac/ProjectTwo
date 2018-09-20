module.exports = function(sequelize, DataTypes) {
    var diets = sequelize.define("diet_categories", {
        diet: DataType.STRING,
        group: DataTypes.STRING,
        info: DataTypes.STRING,
        product_id: DataTypes.INT
    });
    return diets;
};