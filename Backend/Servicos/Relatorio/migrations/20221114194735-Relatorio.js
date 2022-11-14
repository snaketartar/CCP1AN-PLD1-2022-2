'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('tb_relatorio_paciente', { 
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_paciente:{
          type: Sequelize.STRING,
          allowNull: false
      },
      nome_medico:{
        type: Sequelize.STRING,
        allowNull: false
      },
      relatorio:{
          type: Sequelize.STRING,
          allowNull: false
      },
      data_relatorio: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tb_relatorio_paciente');
  }
};
