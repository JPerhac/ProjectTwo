module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("User", {
    usrId: {
      type: DataTypes.STRING
    },
    qId: {
      type: DataTypes.INTEGER
    },
    usrInput: {
      type: DataTypes.STRING
    }
  });
  return user;
};
