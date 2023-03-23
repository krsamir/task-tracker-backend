import { sequelize } from "database";
import { DataTypes } from "sequelize";

const Template = sequelize.define(
  "Template",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    template: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
  },
  {}
);

export default Template;
