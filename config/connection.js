const Sequelize = require("sequelize");
require("dotenv").config();

// let sequelize;

// are we in production?

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     port: 3306,
//   }
// );

module.exports = sequelize;
