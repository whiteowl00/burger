const mysql = require("mysql");

var connect = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Rlatkdwns84',
  database: 'burger_db',
  
});

connect.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connect.threadId);
});

module.exports = connect;