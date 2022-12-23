const express = require('express')
const app = express();
const port = 5000;
const mysql = require('mysql');
const sequelizeRouter = require('sequelize-router');
const sessions = require('sessions')
const sequelize = require('./model/sequelize').sequelize
const {country} = require('./model/country')


const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Password123$",
    port: 3306
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

app.use(express.json())
app.use(session({
    secret: "12AB34",
    resave: false,
    saveUninitialized: false,
}))


app.use('',auth);

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});

