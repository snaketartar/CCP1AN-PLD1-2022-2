const express = require("express");
const axios = require('axios');
const HistoricoConsultas = require('./Model/Historico_consultas.js');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.get("/historicoConsultasMedico/:nome", async(req, res) => {
    let nomeMedico = req.params['nome'];

    let historico = await HistoricoConsultas.findAll({where:{nome_medico:nomeMedico}, attributes:["nome_paciente","data_atendimento"]});

    res.status(200).send({historico})
})

app.get("/historicoConsultasPaciente/:nome", async(req, res) => {
    let nomePaciente = req.params['nome'];

    console.log(await HistoricoConsultas.findAll({where:{nome_paciente:nomePaciente}, attributes:["nome_medico","data_atendimento"]})
    .then(data => data.map( item => item.toJSON())));
    let historico = await HistoricoConsultas.findAll({where:{nome_paciente:nomePaciente}, attributes:["nome_medico","data_atendimento"]})
    .then(data => data.map( item => item.toJSON()));
    res.status(200).send({historico})
})

app.post("/marcandoConsulta", async(req, res)=>{
    let {nomePaciente, nomeMedico, dataMarcada} = req.body;
    console.log(req.body);
    console.log("definidos");
    console.log({nomePaciente, nomeMedico, dataMarcada});

    try {
        await HistoricoConsultas.create({
            nome_medico:nomeMedico,
            nome_paciente: nomePaciente,
            data_atendimento: dataMarcada
        });

        res.status(200).send({msg:"Consulta marcada."});
    } catch (error) {
        console.log(error);
        res.status(200).send({msg:"Problema ao marcar a consulta."});
    }
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