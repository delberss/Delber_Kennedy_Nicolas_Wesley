var express = require('express');
var pool = require('./db');

var router = express.Router();



router.post('/insert', async (req, res) => {
    if (req.query.pword == "senha123") {

        var nome = req.body.nome == "" ? null : req.body.nome;
        var descricao = req.body.descricao == "" ? null : req.body.descricao;
        var idTopico = req.body.idTopico == "" ? null : req.body.idTopico;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;

        var query = 'INSERT INTO subtopicos(nome,descricao,conteudo)' +
            'VALUES ($1,$2,$3) RETURNING id;';
        var values = [nome, descricao,conteudo];

        try {
            // primeiro tenta inserir o topico
            const client = await pool.connect();
            const result = await client.query(query, values);
            var idSubtopico = result.rows[0].id;
            client.release();
            try {
                // se o topico for inserido cria a relação entre caminho e topico
                var query2 = 'INSERT INTO topicoContemSubtopico(subtopico,topico) ' +
                    'VALUES ($1,$2);';
                var values2 = [idSubtopico, idTopico];
                const client2 = await pool.connect();
                const result2 = await client.query(query2, values2);
                res.status(200).send('ok');
                client2.release();
            }
            catch (er) {   // se falhar ao criar ao criar a relação caminho topico, exclui o topico
                var query3 = 'DELETE FROM subtopicos WHERE id = $1' +
                    'VALUES ($1);';
                var values3 = [idSubtopico];
                const client3 = await pool.connect();
                const result3 = await client.query(query3, values3);
                client3.release();
                res.send("erro");
            }
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.post('/insertRelation', async (req, res) => {
    if (req.query.pword == "senha123") {
        var idTopico = req.body.idTopico == "" ? null : req.body.idTopico;
        var idSubtopico = req.body.idSubtopico == "" ? null : req.body.idSubtopico;

        try {
            // se o topico for inserido cria a relação entre caminho e topico
            var query2 = 'INSERT INTO topicoContemSubtopico(subtopico,topico) ' +
                'VALUES ($1,$2);';
            var values2 = [idSubtopico, idTopico];
            const client2 = await pool.connect();
            const result2 = await client.query(query2, values2);
            res.status(200).send('ok');
            client2.release();
        }
        catch (er) {
            res.send("erro");
        }

    }
    else {
        res.status(401).send("não autorizado");
    }
});

router.get('/get/all', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.id == "" ? null : req.query.id;
        const query = 'SELECT * FROM subtopicos;';
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
        const query = 'SELECT * FROM subtopicos WHERE ID =$1;';
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


//TODO
router.put('/edit', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.body.id == "" ? null : req.body.id;
        var nome = req.body.nome == "" ? null : req.body.nome;
        var descricao = req.body.descricao == "" ? null : req.body.descricao;
        var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;


        var query = 'UPDATE subtopicos(nome,descricao,conteudo) WHERE id = $1 ' +
            'VALUES ($1,$2,$3,$4);';
        var values = [id, nome, descricao,conteudo];

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

//TODO
router.delete('/delete', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.body.id == "" ? null : req.body.id;
        if (id) //verifica se id tem um valor valido, se ele for null ou undefined isso aqui retorna falso
        {
            var query = "DELETE FROM subtopicos WHERE id = $1;"
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