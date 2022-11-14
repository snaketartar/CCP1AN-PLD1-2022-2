const express = require("express");
const axios = require('axios');
const Login = require('./Model/Login');

const app = express();
app.use(express.json());

const criandoLogin = async (dados) =>{
    let {idUser, login, senha} = dados;
    
    if(await Login.findOne({where:{login_user: login}})){
        //mandar pra tela de reativacao
        return {status: false, msg: "Login já existente"}
    } else {
        await Login.create({
            id_user: idUser.id,
            login_user: login,
            senha_user: senha,
            status_ultimo_acesso: true
        });

        return await Login.findOne({where:{id_user: idUser.id}}) ? 
            {status: true, msg: "Login criado."} : {status: true, msg: "Falha ao criar login."};
    }
}

app.post("/login", async (req, res) => {
    let {login, senha} = req.body;

    let user = await Login.findOne({where:{login_user:login}, attributes:["id_user","senha_user"]});

    if(user == null || undefined){
        res.status(200).send({msg:"Login inexistente!"});
    }

    if(!user.senha_user == senha){
        res.status(200).send({msg:"Senha incorreta!"})
    }

    req.session.idUser = user.id_user;

    await axios.post("http://localhost:1000/eventos", {
        tipo: "LoginRealizado",
        dados: {
          idUser: user.id_user
        },
    })
    res.status(200).send({msg:"Login válido", idUser: user.id_user})
})

app.post('/eventos', (req, res) => {
    let evento = req.body;
    console.log(req.body)
    switch(evento.tipo){
        case("CadastroRealizado"):
            let result = criandoLogin(evento.dados);
            result.status ? res.status(200).send({msg: result.msg}):res.status(200).send({msg: result.msg});
            break;
        default:
            res.status(200).send({msg: 'ok'});
            break;
    }
})

app.listen(2000, ()=>{

});