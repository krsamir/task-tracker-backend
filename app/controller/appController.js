import { responsePayload, RESPONSE_STATUS, STATUS } from "backend-utility";
import { Template } from "database";
import { handleErrorResponse } from "../Constants.js";

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
      res.status(RESPONSE_STATUS.CREATED_201).send({
        ...responsePayload,
        data,
        message: "Schema Saved.",
        status: STATUS.SUCCESS_1,
      })
    )
    .catch((error) => handleErrorResponse(res, error));
};

export default appController;
