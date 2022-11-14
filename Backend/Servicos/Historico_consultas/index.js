const express = require("express");
const axios = require('axios');
const HistoricoConsultas = require('./Model/Historico_consultas.js');

const app = express();
app.use(express.json());

app.get("/historicoConsultasMedico", async(req, res) => {
    let {nomeMedico} = req.body;

    let historico = await HistoricoConsultas.findAll({where:{nome_medico:nomeMedico}, attributes:["nome_paciente","data_atendimento"]});

    res.status(200).send({historico})
})

app.get("/historicoConsultasPaciente", async(req, res) => {
    let {nomePaciente} = req.body;

    let historico = await HistoricoConsultas.findAll({where:{nome_paciente:nomePaciente}, attributes:["nome_medico","data_atendimento"]});

    res.status(200).send({historico})
})

app.post("/", async (req, res) => {
    await axios.post('http://localhost:1000/eventos', {
        tipo: 'RelatorioCriado',
        dados: {
            
        }
    })

    res.status(201).send({msg:"ok"});
});

app.post('/eventos', (req, res) => {
    res.status(200).send({msg: 'ok'});
})

app.listen(5000, ()=>{
    
})