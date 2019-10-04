const { join } = require('path');
const express = require('express');
const { getData } = require('./utils');
const { data } = require('./data.js');

const app = express();

app.use(/.*(js|css).gz$/, (req, res, next) => {
    res.set('Content-Encoding', 'gzip');

    next();
});

app.use(express.static(join(__dirname, 'dist')));


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});


app.get('/list', (req, res) => {
    console.log(req.query);

    const { count } = req.query;

    const w = getData(data, count);


    res.send(w);
});

app.get('/file', (req, res) => {
    res.sendFile(join(__dirname, 'plan.docx'));
});

app.listen(3000, () => console.log('port 3000'));
