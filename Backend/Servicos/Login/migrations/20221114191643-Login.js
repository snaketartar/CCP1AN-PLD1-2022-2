'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_login', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      login_user:{
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      senha_user:{
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      status_ultimo_acesso:{
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
    await queryInterface.dropTable('tb_login');
  }
};
