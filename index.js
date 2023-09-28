const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const express = require('express');
// ************************  Database Connection  **********************************//
const db = require('./config/mongoose');

const path = require('path');
const multer = require('multer')
const app = express();
app.use(express.urlencoded({ extended: false }));

//middleware to use assets
const assetsPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(assetsPath));

//setting view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.use('/', require('./routes'));

// ************************   Port Start   ********************************//
app.listen(8000, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log("Successfully Connected to Server, 8000!!");
});
