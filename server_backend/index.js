const express = require('express');
const mongoose = require('mongoose');

const shoesRoute = require('./routes/shoesRoute')
const userRoute = require('./routes/userRoute')
const customerRoute = require('./routes/customerRoute')

const app = express()
app.use(express.json());
require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

// set up server 
const PORT = 8000;
app.listen(PORT, () => console.log(`Port started on: ${PORT}`));

//setting up db

mongoose.connect('mongodb+srv://priyanshuchoudhary0104:Priyanshu0209@cape-mongodb.0xium03.mongodb.net/test',
    { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB!');
});
app.get('/', function (req, res) {
    res.send('Server working')
})

app.use('/api/shoes/', shoesRoute);
app.use("/authentication", userRoute);
app.use("/Customer", customerRoute);

