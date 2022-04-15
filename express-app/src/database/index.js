import Sequelize from "sequelize";
import config from "../config/database";
import Curso from "../app/models/Curso";

const models = [Curso];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(config);
    models
      .map((model) => model.init(this.connection))
      .map((model) => {
        if (model.associate) model.associate(this.connection.models);
        return model;
      });
  }
}

export default new Database();
