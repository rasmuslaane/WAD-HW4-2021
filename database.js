const Pool = require('pg').Pool;
const pool = new Pool({
user: "postgres",
password: "Cdmx73ciJDtR79FhtWPw",
database: "wadhm4",
host: "localhost",
port: "5432"
});
module.exports = pool;