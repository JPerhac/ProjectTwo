module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define("Questions", {
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
