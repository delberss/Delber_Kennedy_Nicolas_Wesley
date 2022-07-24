var express = require('express');
var pool = require('./db');

var router = express.Router();



router.post('/insert', async (req, res) => {

    console.log(req.body.usuario);
    console.log(req.body.caminho);
    console.log(req.body.conteudo);

    var usuario = req.body.usuario == "" ? null : req.body.usuario;
    var caminho = req.body.caminho == "" ? null : req.body.caminho;
    var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
    var criado = 'NOW()';
    var editado = 'NOW()';

    var query = 'INSERT INTO feedbackCaminho(usuario,caminho,conteudo,criadoEm,editadoEm)' +
        'VALUES ($1,$2,$3,$4,$5)';
    var values = [usuario, caminho, conteudo, criado, editado];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);

        res.status(200).send('ok');
        client.release();;
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
}

);



router.get('/get/all', async (req, res) => {


    const query = 'SELECT * FROM feedbackCaminho;';

    try {
        const client = await pool.connect();
        const resultado_query = await client.query(query);
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
router.get('/get/all/user/caminho', async (req, res) => {

    var id = req.query.usuario == "" ? null : req.query.usuario;
    var caminho = req.query.caminho == "" ? null : req.query.usuario;
    const query = 'SELECT * FROM feedbackCaminho WHERE usuario= $1 AND caminho = $2;';
    const values = [id, caminho];
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
    var usuario = req.body.usuario == "" ? null : req.body.usuario;
    var caminho = req.body.idCaminho == "" ? null : req.body.idCaminho;
    var conteudo = req.body.conteudo == "" ? null : req.body.conteudo;
    var criado = req.body.criado == "" ? null : req.body.criado;
    var editado = 'NOW()';

    console.log(id);

    console.log(usuario);

    console.log(caminho);
    console.log(conteudo);
    console.log(editado);
    console.log(criado);

    var query = 'UPDATE feedbackCaminho' +
        ' SET usuario =$1,caminho = $2,conteudo=$3,criadoEm=$4,editadoEm=$5 ' +
        'WHERE id = $6 ';
    var values = [usuario, caminho, conteudo, criado, editado,id];

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