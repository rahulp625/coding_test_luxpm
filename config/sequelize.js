const dbConfig = require("./mysql");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.words = require("../models/storeword.model.js")(sequelize, Sequelize);


// db.quotations.hasMany(db.estimations);

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


module.exports = db;