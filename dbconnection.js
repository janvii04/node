
const Sequelize = require("sequelize")
//userName---root password---- janvi@202004
const sequelize = new Sequelize('mitali1', 'root', 'janvi@202004', {
    host: 'localhost',
    dialect: "mysql",
});
const connectionDB = async () => {
    await sequelize.authenticate()
        .then(async() => {
            await sequelize.sync({ alert: false });
            console.log('dbconnected')
        }).catch((err) => {
            console.log(err)})
  }


module.exports = {
    sequelize: sequelize,
    connectionDB: connectionDB
}


