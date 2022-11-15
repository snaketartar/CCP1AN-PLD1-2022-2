const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_CADASTRO, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: "mysql"
});

const Relatorio = sequelize.define('tb_relatorio_paciente',{
    id_relatorio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome_paciente:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nome_medico:{
        type: DataTypes.STRING,
        allowNull: false
    },
    relatorio:{
        type: DataTypes.STRING(5000),
        allowNull: false
    },
    ultimo_acesso:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'tb_relatorio_paciente'
});

module.exports = Relatorio;