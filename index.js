const express = require('express');
const path = require('path');
const app = express();
let port = 3000;

app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('data1');
})

app.get('/data2', (req, res) => {
    res.render('data2');
})

app.get('/data3', (req, res) => {
    res.render('data3');
})

app.listen(port, () => {
    console.log(`Server on! ${port}`);
})