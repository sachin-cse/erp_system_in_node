const express = require('express');
const router = express('router');
const db_conn = require('../db_conn');

router.get('/', (req, res)=>{
    res.send('Hare krishna');
});


module.exports = router;

