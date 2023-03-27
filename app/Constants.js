import { error } from "logger";
import {
  responsePayload,
  RESPONSE_STATUS,
  SEQUELIZE_UNIQUE_CONSTRAINT_ERROR,
  STATUS,
} from "backend-utility";

export const handleErrorResponse = (res, errorData) => {
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
