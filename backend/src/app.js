const express = require('express');
const app = express();
const cors = require('cors');
const products = require('./routes/products');
const notes = require('./routes/notes');


//settings
app.set('port', process.env.PORT || 4000);




//midlewares
app.use(cors());
app.use(express.json());




//routes
app.use('/api/products', products);
app.use('/api/notes', notes);




module.exports = app;