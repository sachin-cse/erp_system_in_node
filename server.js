require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3001
const webroutes = require('./routes/web');
const adminroutes = require('./routes/admin');
app.use(express.json());

app.use('/', webroutes);

app.use('/admin', adminroutes);

app.listen(PORT, ()=>{
    
    console.log(`✅ Server running at http://localhost:${PORT}`);
});