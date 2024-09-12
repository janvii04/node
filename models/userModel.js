module.exports=function(Sequelize,sequelize,DataTypes){
    return sequelize.define("user",{
        ...require("./core")(Sequelize,DataTypes),
        name:{
            type:DataTypes.STRING(255),
            allowNull:true
        }
    },{
       tableName:"user",
       timeStamps:true 
    })
}