const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_LOGIN, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: "mysql"
});

const Login = sequelize.define('tb_login',{
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    login_user:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha_user:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status_ultimo_acesso:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'tb_login'
});

module.exports = Login;