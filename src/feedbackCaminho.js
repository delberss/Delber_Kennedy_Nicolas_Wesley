var express = require('express');
var pool = require('./db');

var router = express.Router();



router.post('/insert', async (req, res) => {
     

        var usuario = req.body.descricao == "" ? null : req.body.descricao;
        var caminho = req.body.idCaminho == "" ? null : req.body.idCaminho;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
        var criado = 'NOW()';
        var editado = 'NOW';

        var query = 'INSERT INTO feedbackCaminho(usuario,caminho,conteudo,criado,editado)' +
            'VALUES ($1,$2,$3,$4,$5)';
        var values = [usuario,caminho,conteudo,criado,editado];

        try {
            const client = await pool.connect();
            const result = await client.query(query, values);
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
     
 );



router.get('/get/all', async (req, res) => {
     
        var id = req.query.id == "" ? null : req.query.id;
        const query = 'SELECT * FROM feedbackCaminho;';
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
     
 );

router.get('/get/all/user', async (req, res) => {
     
        var id = req.query.usuario == "" ? null : req.query.usuario;
        const query = 'SELECT * FROM feedbackCaminho WHERE usuario= $1;';
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
     
 );

router.get('/get', async (req, res) => {
     
        var id = req.query.id == "" ? null : req.query.id;
        const query = 'SELECT * FROM feedbackCaminho WHERE ID =$1;';
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
     
 );



router.put('/edit', async (req, res) => {
     
        var id = req.body.id == "" ? null : req.body.id;
        var usuario = req.body.descricao == "" ? null : req.body.descricao;
        var caminho = req.body.idCaminho == "" ? null : req.body.idCaminho;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
        var criado = req.body.criado == "" ? null : req.body.criado;
        var editado = 'NOW';


        var query = 'UPDATE feedbackCaminho(usuario,caminho,conteudo,criado,editado) WHERE id = $1 ' +
            'VALUES ($1,$2,$3,$4,$5,$6);';
        var values = [id, usuario,caminho,conteudo,criado,editado];

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
     
 );


router.delete('/delete', async (req, res) => {
     
        var id = req.body.id == "" ? null : req.body.id;
        if (id) //verifica se id tem um valor valido, se ele for null ou undefined isso aqui retorna falso
        {
            var query = "DELETE FROM feedbackCaminho WHERE id = $1;"
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
     
 );

module.exports = router;