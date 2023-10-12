const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const axios = require("axios");
// Set up Handlebars as the view engine here 
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + '/public'));
// this is  sample  Sample books data
const books = [
  { title: 'Book 1', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' },
  
];

// Define a route to render the search page here
app.get('/', (req, res) => {
  res.render('index', { books });
});

// Start the server on port 3002 
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
