import {
  responsePayload,
  RESPONSE_STATUS,
  SEQUELIZE_UNIQUE_CONSTRAINT_ERROR,
  STATUS,
} from "backend-utility";
import { Template } from "database";
import { error } from "logger";

const appController = {};

appController.getTemplate = (req, res) => {
  Template.findAll()
    .then((data) =>
      res.status(RESPONSE_STATUS.OK_200).send({ status: 1, message: "", data })
    )
    .catch((error) => handleErrorResponse(res, error));
};

appController.createTemplate = (req, res) => {
  const { name, template } = req.body;
  Template.create({ name, template })
    .then((data) =>
      res
        .status(RESPONSE_STATUS.CREATED_201)
        .send({ ...responsePayload, data, status: STATUS.SUCCESS_1 })
    )
    .catch((error) => handleErrorResponse(res, error));
};

const handleErrorResponse = (res, errorData) => {
  if (errorData.name === SEQUELIZE_UNIQUE_CONSTRAINT_ERROR) {
    res.status(RESPONSE_STATUS.OK_200).send({
      ...responsePayload,
      message: "Duplicate Data.",
      status: STATUS.DUPLICATE_2,
    });
  } else {
    error(errorData);
    res
      .status(RESPONSE_STATUS.INTERNAL_SERVER_ERROR_500)
      .send({ ...responsePayload, error: errorData });
  }
};
export default appController;
