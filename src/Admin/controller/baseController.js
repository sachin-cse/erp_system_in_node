const express = require('express');
const path = require('path');

const db_conn = require(path.resolve(__dirname, '../../../db_conn'));


exports.index = (req, res)=>{
    res.send('Hare krishna Hare rama');
}
