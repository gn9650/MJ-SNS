const mysql2 = require("mysql2");
const dotenv = require("dotenv");


dotenv.config();

const db = mysql2.createPool({
    port:process.env.PORT,
    user:process.env.DB_USER,
    password:process.env.PASS,
    host:process.env.HOST,
    database: process.env.DB,
});

module.exports = db;