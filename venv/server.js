const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');  // Ensure path accuracy based on your structure

const app = express();
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://jereenv02:Y7av8chaW3pXskFD@securedshare0.welnwbo.mongodb.net/';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to MongoDB");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
