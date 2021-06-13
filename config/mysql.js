const Development = {
    // USER: "master",
    USER: "rahul",
    PASSWORD: "password",
};

const Production = {
    USER: "admin",
    PASSWORD: "",
}

module.exports = {
    ...(process.env.ENV === "prod" ? Production : Development),
    HOST: "localhost",
    DB: "paul_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}