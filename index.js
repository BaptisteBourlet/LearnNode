const express = require('express')
const hbs = require('express-hbs');
const app = express();
const router = require('./router')
var bodyParser = require("body-parser");

const fs = require('fs')

const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static('./public/'));


app.engine('hbs', hbs.express4({
    partialsDir: `${process.cwd()}/views`,
}))
app.set('view engine', 'hbs');
app.set('views', `${process.cwd()}/views`);

app.use('/', router)

app.listen(port, () => {
    console.log('server running on ' + port)
})



