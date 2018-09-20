module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        usrID: DataTypes.STRING,
        qID: DataTypes.STRING,
        usrInput: DataTypes.STRING
    });
    return user;
}