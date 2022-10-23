const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const { v4: uuidv4 } = require('uuid');
usuarios = {};

app.get('/cadastro', (req, res) => {
    res.send(usuarios);
});

app.put('/cadastro', (req, res) => {
    const id = uuidv4();
    const { user } = req.body;
    usuarios[id] = {
        id, user
    }
    res.status(201).send(usuarios[id]);
});     

app.listen(1000, () => {
    console.log('Cadastro. Porta 1000');
});

