var express = require('express');
var pool = require('./db');

var router = express.Router();



router.post('/insert', async (req, res) => {
    if (req.query.pword == "senha123") {

        var usuario = req.body.descricao == "" ? null : req.body.descricao;
        var topico = req.body.idTopico == "" ? null : req.body.idTopico;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
        var criado = 'NOW()';
        var editado = 'NOW';

        var query = 'INSERT INTO feedbackTopico(usuario,topico,conteudo,criado,editado)' +
            'VALUES ($1,$2,$3,$4,$5)';
        var values = [usuario,topico,conteudo,criado,editado];

        try {
            // primeiro tenta inserir o topico
            const client = await pool.connect();
            const result = await client.query(query, values);
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
    else {
        res.status(401).send("não autorizado");
    }
});



router.get('/get/all', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.id == "" ? null : req.query.id;
        const query = 'SELECT * FROM feedbackTopico;';
        const values = [id];
        try {
            const client = await pool.connect();
            const resultado_query = await client.query(query, values);
            var resultado_final = resultado_query.rows;
            res.send(resultado_final);
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.get('/get/all/user', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.usuario == "" ? null : req.query.usuario;
        const query = 'SELECT * FROM feedbackTopico WHERE usuario= $1;';
        const values = [id];
        try {
            const client = await pool.connect();
            const resultado_query = await client.query(query, values);
            var resultado_final = resultado_query.rows;
            res.send(resultado_final);
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.get('/get', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.id == "" ? null : req.query.id;
        const query = 'SELECT * FROM feedbackTopico WHERE ID =$1;';
        const values = [id];
        try {
            const client = await pool.connect();
            const resultado_query = await client.query(query, values);
            var resultado_final = resultado_query.rows;
            res.send(resultado_final);
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.put('/edit', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.body.id == "" ? null : req.body.id;
        var usuario = req.body.descricao == "" ? null : req.body.descricao;
        var topico = req.body.idTopico == "" ? null : req.body.idTopico;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
        var criado = req.body.criado == "" ? null : req.body.criado;
        var editado = 'NOW';


        var query = 'UPDATE feedbackTopico(usuario,topico,conteudo,criado,editado) WHERE id = $1 ' +
            'VALUES ($1,$2,$3,$4,$5,$6);';
        var values = [id, usuario,topico,conteudo,criado,editado];

        try {
            const client = await pool.connect();
            const result = await client.query(query, values);
            res.status(200).send('ok');
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }

    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.delete('/delete', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.body.id == "" ? null : req.body.id;
        if (id) //verifica se id tem um valor valido, se ele for null ou undefined isso aqui retorna falso
        {
            var query = "DELETE FROM feedbackTopico WHERE id = $1;"
            var values = [id];
            try {
                const client = await pool.connect();
                const result = await client.query(query, values);
                res.status(200).send('ok');
                client.release();
            } catch (err) {
                console.error(err);
                res.send("Error " + err);
            }
        } else {
            res.send("error, invalid id");
        }
    }
    else {
        res.status(401).send("Não autorizado");
    }
});

module.exports = router;