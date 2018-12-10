const express = require('express');
const csv = require('csv-express');
const fileUpload = require('express-fileupload');
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./config');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: config.db_pass,
    database: 'Users'
});
connection.connect();
//express
const app = express();
app.use(fileUpload({safeFileNames: /\\/g}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/download', (req, res) => {
    const filename = "users.csv";
    connection.query(`select u.UserName as 'UserName', u.FirstName as 'FirstName',  
    u.LastName as 'LastName', u.Age as 'Age'
        from users u`, (error, results, fields) => {
        if (error) throw (error);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(results, true);
    });
});
app.get('/show', (req, res) => {
    connection.query(`select u.UserName as 'UserName', u.FirstName as 'FirstName',  
    u.LastName as 'LastName', u.Age as 'Age'
        from users u`, (error, results, fields) => {
        if (error) throw (error);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(results);
    });
});
app.post('/upload', (req, res) => {
    if (Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (req.files.csvFile.mimetype !== 'text/csv') {
        return res.status(400).send(`Expected the CSV file, got "${req.files.csvFile.mimetype}"`);
    }
    let csvFile = req.files.csvFile;
    const result = csvFile.data.toString('utf8');
    const arrayOfStrings = result.split('\n');
    const filedList = arrayOfStrings[0];
    for (let i = 1; i < arrayOfStrings.length - 1; i++) {
        connection.query(`insert into users (${filedList}) values (${arrayOfStrings[i]})`, (error, results, fields) => {
            if (error) throw (error);
        });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});
app.listen(config.PORT, () => {
    console.log(`Server is running on: ${config.PORT}`);
});