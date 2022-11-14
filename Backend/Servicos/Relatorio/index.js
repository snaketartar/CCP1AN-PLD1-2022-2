const express = require("express");
const axios = require('axios');
const Relatorio = require("./Model/Relatorio.js");

const app = express();
app.use(express.json());

app.get("/relatoriosPaciente", async (req, res) => {
    let {nomePaciente} = req.body.nomePaciente;

    let relatorios = await Relatorio.findAll({where:{nome_paciente:nomePaciente}, attributes:["relatorio","nome_medico","data_relatorio"]});

    res.status(200).send({relatorios});
})

app.get("/relatoriosMedico", async (req, res) =>{
    let {nomeMedico} = req.body.nomePaciente;

    let relatorios = await Relatorio.findAll({where:{nome_medico:nomeMedico}, attributes:["relatorio","nome_paciente","data_relatorio"]});

    res.status(200).send({relatorios});
})

app.post("/relatorios", async (req, res) => {
    let {relatorio, nomeMedico, nomePaciente} = req.body;

    await Relatorio.create({
        nome_paciente: nomePaciente,
        nome_medico: nomeMedico,
        relatorio,
        data_relatorio: new Date().toUTCString()
    })


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

app.listen(3000, ()=>{
    
})