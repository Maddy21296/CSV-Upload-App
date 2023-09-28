const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const express = require('express');
const db = require('./config/mongoose');

const path = require('path');
const multer = require('multer')
const app = express();
app.use(express.urlencoded({ extended: false }));
const assetsPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(assetsPath));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(8000, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log("Successfully Connected to Server, 8000!!");
});
