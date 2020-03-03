require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');

app.use(express.json());
app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION
});
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});
app.post('/api/contact', function(req, res) {
    console.log(req.body);
    transporter.sendMail({
        replyTo: req.body.contactEmail,
        from: 'contact@lexiwinstanley.com',
        to: 'lexi@lexiwinstanley.com',
        subject: 'Portfolio Contact',
        text: `Name: ${req.body.contactName} \nEmail: ${req.body.contactEmail} \nMessage: ${req.body.contactMessage}`
    }, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return
        }
        res.sendStatus(200);
    });
});
app.listen(port, () => {
    console.log('Server is up!');
});
