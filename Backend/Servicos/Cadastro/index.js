const express = require("express");
const axios = require('axios');
const  Cadastro  = require('./model/Cadastro');

const app = express();
app.use(express.json());

const carregaFuncao = async(idUser) =>{
    return await Cadastro.findOne({where:{id:idUser}, attributes:["funcao_clinica"]});
}

app.post("/cadastro", async (req, res) => {
    let {nome, rg, cpf, dataNascimento, nomeMae, nomePai, login, senha, funcao} = req.body;
    let userRetornando;

    if(!nome || !rg || !cpf || !dataNascimento || !nomeMae || !nomePai){
        return res.status(401).json({message:"Preencha todo o formulário!"})
    }

    if(await Cadastro.findOne({where:{cpf}})) {
        //mandar para um update de status
        userRetornando = await Cadastro.findOne({where:{cpf}, attributes:["id", "status_cadastro"]});
    }

    await Cadastro.create({
        nome,
        rg,
        cpf,
        data_nascimento: dataNascimento,
        nome_mae: nomeMae,
        nome_pai: nomePai,
        funcao_clinica: funcao,
        status_cadastro: true
    })

    let mensagem = "Paciente cadastrado"
    

    let idUser = await Cadastro.findOne({where:{cpf}, attributes:["id"]});

    await axios.post('http://localhost:1000/eventos', {
        evento:{
            tipo: 'CadastroRealizado',
            dados: {
                idUser,
                login,
                senha
            }
        } 
    })

    res.status(201).send({mensagem});
});

app.get("/carregaMedicos", async (req, res) =>{
    let medicos = Cadastro.findAll({where:{funcao_clinica:"medico"}, attributes:["id","nome"]});

    res.status(201).send(medicos)
})

app.post('/eventos', (req, res) => {
    let evento = req.body;

    switch(evento.tipo){
        case("LoginRealizado"):
                let funcao = carregaFuncao(evento.dados.idUser);
                res.status(200).send({msg:"Ok", funcao:funcao.funcao_clinica});
            break;
        default:
            res.status(200).send({msg: 'ok'});
            break;
    }
})

app.listen(4000, ()=>{
    
})