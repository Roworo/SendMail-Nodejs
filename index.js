const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Files
const sendMail = require('./sendMail/Send');

//ENABLING CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//SERVICES
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/sendEmail', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); // allow request from all origin
    res.header("Access-Control-Allow-Methods", "POST");
    res.send(sendMail.Send(req));
})

app.listen(8000, () => {
    console.log('Listening on port 8000...');
})
