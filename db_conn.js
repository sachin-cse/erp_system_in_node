require('dotenv').config();
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
});

try{
    
    connection.connect((err) => {
        if(err){
            console.error('❌ Database connection failed:', err.message);
        }
    })
}catch(error){
    console.error('❌ Unexpected error during DB connection:', error.message);
}

module.exports = connection;