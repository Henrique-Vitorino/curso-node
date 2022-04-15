"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("cursos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      duracao: Sequelize.STRING(100),
      dataPublicacao: Sequelize.DATE,
      createAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updateAt: Sequelize.DATE,
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("cursos"),
};
