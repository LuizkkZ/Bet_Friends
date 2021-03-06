'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      type:{
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'user'
      },
      saldo:{
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue:100
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sub:{
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) =>{
     await queryInterface.dropTable('users');
     
  }
};