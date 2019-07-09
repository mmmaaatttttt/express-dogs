/** Database setup for dogs. */
const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///dogs_db_test";
} else {
  DB_URI = "postgresql:///dogs_db";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
