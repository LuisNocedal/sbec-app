const express = require('express');
const cors = require('cors');
const birds = require('./birds.json');
const fs = require('fs');
const bodyParser = require('body-parser')

const port = 3000;
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("Index");
});

app.get('/get-birds',(req, res) => {
    res.json({birds});
});

app.post('/set-birds', (req, res) => {
    const { birds } = req.body;
    const birdsJson = JSON.stringify(birds);

    fs.writeFile('birds.json', birdsJson, 'utf8', () => {});

    res.json({
        message: 'Registro exitoso'
    }); 
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
