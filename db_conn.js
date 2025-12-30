// server.js
require('dotenv').config(); 

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

console.log(`Connecting to database ${dbConfig.database} on ${dbConfig.host}`);