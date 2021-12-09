const Pool = require('pg').Pool;
const pool = new Pool({
user: "postgres",
password: "SIIA PAROOL",
database: "SIIA DATABASE NIMI",
host: "localhost",
port: "5432"
});
module.exports = pool;