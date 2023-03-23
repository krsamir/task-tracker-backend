import { Sequelize } from "sequelize";
import { error, info } from "logger";

const sequelize = new Sequelize("tasktracker", "postgres", "root", {
  host: "localhost",
  port: 3306,
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => info(`Database connected at ${new Date().toLocaleString()}`))
  .catch(error);

export default sequelize;
