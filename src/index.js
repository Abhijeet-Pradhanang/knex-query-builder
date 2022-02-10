const express = require('express');
const app = express();
const routes=require('./routes/main.route')
const exphbs = require('express-handlebars').engine;
app.use(express.json())

const path = require("path");
// view engine setup
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');

// {
//   "email":"",
//   "password":"",
//   "address":"",
// }

// CRUD application
// create read update delete
// post get put delete

// Initialize routes
app.use(routes);

app.listen(8080, () => {
  console.log('Listening at port 8080')
})