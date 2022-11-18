require('dotenv').config();

module.exports =
{
  "development": {
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    // secret: process.env.SECRET,
    appPort: process.env.APP_PORT,
    // role:process.env.DB_ROLE,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    },
    "logging": true,
  },
  "test": {
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET,
    appPort: process.env.APP_PORT,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    },
    "logging": true,
  },
  "production": {
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET,
    appPort: process.env.APP_PORT,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    },
    "logging": false,
  }
}