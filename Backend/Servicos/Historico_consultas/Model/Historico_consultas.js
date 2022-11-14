const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_CADASTRO, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: "mysql"
});

const HistoricoConsultas = sequelize.define('tb_historico_consultas',{
    nome_medico:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nome_paciente:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ultimo_atendimento:{
        type: DataTypes.DATE,
        allowNull: false
    },
},{
    tableName: 'tb_historico_consultas'
});

module.exports = HistoricoConsultas;