const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controller');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(routes);

app.listen(process.env.PORT | 3000, () => console.log('http://localhost:3000'))