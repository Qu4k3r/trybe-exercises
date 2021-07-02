const mysql = require('mysql2/promise');
 
// Create the connection pool. The pool-specific settings are the defaults
const connectionPool = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '',
  database: 'cep_lookup',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connectionPool;
