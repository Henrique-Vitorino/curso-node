import Sequelize, { Model } from "sequelize";

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeCurso: Sequelize.STRING(100),
        duracao: Sequelize.STRING(100),
        dataPublicacao: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: "curso",
      }
    );
    return this;
  }
}
