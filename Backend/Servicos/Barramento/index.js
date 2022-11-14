const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/eventos', (req, res) =>{
    const evento = req.body.evento;
    console.log(evento);

    axios.post('http://localhost:2000/eventos', evento).catch((err) => {
        res.status(500);
    })

    axios.post('http://localhost:3000/eventos', evento).catch((err) => {
        res.status(500);
    })

    axios.post('http://localhost:4000/eventos', evento).catch((err) => {
        res.status(500);
    })

    axios.post('http://localhost:5000/eventos', evento).catch((err) => {
        res.status(500);
    })

    res.status(200).send({msg:"ok"});
})

app.listen(1000, () =>{

});