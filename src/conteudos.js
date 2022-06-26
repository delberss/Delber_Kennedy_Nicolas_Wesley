var express = require('express');
var pool = require('./db');

var router = express.Router();



router.post('/insert', async (req, res) => {
    if (req.query.pword == "senha123") {

        var tipo = req.body.tipo == "" ? null : req.body.tipo;
        var link = req.body.link == "" ? null : req.body.link;

        var query = 'INSERT INTO conteudos(tipo,link)' +
            'VALUES ($1,$2)';
        var values = [tipo,link];

        try {
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

router.post('/insertRelation/caminho', async (req, res) => {
    if (req.query.pword == "senha123") {
        var idConteudo = req.query.idConteudo == "" ? null : req.query.idConteudo;
        var idCaminho = req.body.idCaminho == "" ? null : req.body.idCaminho;

        try {
            // se o topico for inserido cria a relação entre caminho e topico
            var query2 = 'INSERT INTO caminhoContemConteudo(caminho,conteudo) ' +
                'VALUES ($1,$2);';
            var values2 = [idCaminho, idConteudo];
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
router.post('/insertRelation/topico', async (req, res) => {
    if (req.query.pword == "senha123") {
        var idConteudo = req.query.idConteudo == "" ? null : req.query.idConteudo;
        var idTopico = req.body.idTopico == "" ? null : req.body.idTopico;

        try {
            // se o topico for inserido cria a relação entre caminho e topico
            var query2 = 'INSERT INTO topicoContemConteudo(topico,conteudo) ' +
                'VALUES ($1,$2);';
            var values2 = [idTopico, idConteudo];
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

router.post('/insertRelation/subtopico', async (req, res) => {
    if (req.query.pword == "senha123") {
        var idConteudo = req.query.idConteudo == "" ? null : req.query.idConteudo;
        var idSubTopico = req.body.idSubTopico == "" ? null : req.body.idSubTopico;

        try {
            // se o topico for inserido cria a relação entre caminho e topico
            var query2 = 'INSERT INTO subtopicoContemConteudo(subtopico,conteudo) ' +
                'VALUES ($1,$2);';
            var values2 = [idSubTopico, idConteudo];
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
        const query = 'SELECT * FROM conteudos;';
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

router.get('/get/all/caminho', async (req, res) => {
    if (req.query.pword == "senha123") {

        var id = req.query.idCaminho == "" ? null : req.query.idCaminho;
        const query = 'SELECT * FROM caminhoContemConteudo WHERE caminho = $1;';
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
router.get('/get/all/topico', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.idTopico == "" ? null : req.query.idTopico;
        const query = 'SELECT * FROM topicoContemConteudo WHERE topico = $1;';
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
router.get('/get/all/subtopico', async (req, res) => {
    if (req.query.pword == "senha123") {
        var id = req.query.idSubtopico == "" ? null : req.query.idSubtopico;
        const query = 'SELECT * FROM subtopicoContemConteudo WHERE subtopico = $1;';
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
        const query = 'SELECT * FROM conteudos WHERE ID =$1;';
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
        var tipo = req.body.tipo == "" ? null : req.body.tipo;
        var link = req.body.link == "" ? null : req.body.link;



        var query = 'UPDATE conteudos(tipo,link) WHERE id = $1 ' +
            'VALUES ($1,$2,$3);';
        var values = [id,tipo,link];

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
            var query = "DELETE FROM conteudos WHERE id = $1;"
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