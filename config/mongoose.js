const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb://localhost:127.0.0.1:27017/CSV-UploadApp`);
// mongoose.connect(process.env.mongooseUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;

