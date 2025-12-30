#!/usr/bin/env node

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const Routes = require('./routes/web.js');
const expressEjsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src', 'views'));
// console.log('VIEWS PATH =>', app.get('views'));

app.use(expressEjsLayouts);

app.set('layout', 'layout/main');
app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});