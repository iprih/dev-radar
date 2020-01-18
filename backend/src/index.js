const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect('mongodb+srv://rocketseat:adm@cluster0-tjvtu.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true, 
useUnifiedTopology:true 
});


app.use(express.json());
app.use(routes);


app.listen(3000);
