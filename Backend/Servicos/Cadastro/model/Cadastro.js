const {Sequelize, DataTypes, Model} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_CADASTRO, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: "mysql"
});

const Cadastro = sequelize.define('tb_cadastro',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rg:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nome_mae:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nome_pai:{
        type: DataTypes.STRING,
        allowNull: false
    },
    funcao_clinica:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status_cadastro:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},{
    tableName: 'tb_cadastro'
});

module.exports = Cadastro;