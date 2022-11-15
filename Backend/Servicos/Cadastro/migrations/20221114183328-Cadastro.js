'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('tb_cadastro', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false
      },
      rg:{
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      cpf:{
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      data_nascimento:{
          type: Sequelize.STRING,
          allowNull: false
      },
      nome_mae:{
          type: Sequelize.STRING,
          allowNull: false
      },
      nome_pai:{
          type: Sequelize.STRING,
          allowNull: false
      },
      funcao_clinica:{
          type: Sequelize.STRING,
          allowNull: false
      },
      status_cadastro:{
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
     });
     
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('tb_cadastro');
  }
};
