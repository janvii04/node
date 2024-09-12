const Sequelize=require("sequelize")

const sequelize=require("../dbconnection").sequelize
module.exports={
    userModels:require("./userModel")(Sequelize,sequelize,Sequelize.DataTypes)
}
