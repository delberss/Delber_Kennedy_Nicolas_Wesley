const { debug } = require('console');
const express = require('express');
const req = require('express/lib/request');
var cors = require('cors');

const path = require('path');
const PORT = process.env.PORT || 5000;


var usuarios = require('./src/usuarios'),
    createDb = require('./src/createDb'),
    topicos = require('./src/topicos'),
    feedbackTopico = require('./src/feedbackTopico'),
    feedbackCaminho = require('./src/feedbackCaminho'),
    feedbackSubtopico = require('./src/feedbackSubtopico'),
    subtopicos = require('./src/subtopicos'),
    caminhos = require('./src/caminhos');


var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/createDb', createDb);
app.use('/usuarios', usuarios);
app.use('/topicos', topicos);
app.use('/feedbackCaminho', feedbackCaminho);
app.use('/feedbackTopico', feedbackTopico);
app.use('/feedbackSubtopico', feedbackSubtopico);
app.use('/subtopicos', subtopicos);
app.use('/caminhos', caminhos);
app.use('/wakeup', (req, res) => { res.send("ok"); });
app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});