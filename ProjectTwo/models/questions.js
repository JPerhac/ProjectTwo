module.exports = function(sequelize, DataTypes) {
    var questions = sequelize.define("questions", {
        question: DataTypes.STRING,
        group: DataTypes.STRING,
        qID: DataTypes.INT
    });
    return questions;
};