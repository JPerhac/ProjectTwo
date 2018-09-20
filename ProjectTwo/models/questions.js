module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define("questions", {
  question: {
    type: DataTypes.STRING
    },
    group: {
      type: DataTypes.STRING
    },
    qId: {
      type: DataTypes.INTEGER
    }
});
  return questions;
};