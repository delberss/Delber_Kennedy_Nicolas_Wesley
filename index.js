const { debug } = require('console');
const express = require('express');
const req = require('express/lib/request');
var cors = require('cors');

const path = require('path');
const PORT = process.env.PORT || 5000;


var usuarios = require('./src/usuarios'),
    createDb = require('./src/createDb'),
    topicos = require('./src/topicos'),
    conteudos = require('./src/conteudos'),
    subtopicos = require('./src/subtopicos'),
    feedbackCaminho = require('./src/feedbackCaminho'),
    feedbackSubTopico = require('./src/feedbackSubTopico'),
    feedbackTopico = require('./src/feedbackTopico'),
    caminhos = require('./src/caminhos');


var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/createDb', createDb);
app.use('/usuarios', usuarios);
app.use('/conteudos', conteudos);
app.use('/topicos', topicos);
app.use('/subtopicos', subtopicos);
app.use('/caminhos', caminhos);
app.use('/feedbacktopicos', feedbackTopico);
app.use('/feedbacksubtopicos', feedbackSubTopico);
app.use('/feedbackcaminhos', feedbackCaminho);
app.use('/wakeup', (req, res) => { res.send("ok"); });
app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});