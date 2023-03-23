export const STATUS = Object.freeze({
  FAILURE_0: 0,
  SUCCESS_1: 1,
  DUPLICATE_2: 2,
});

export const responsePayload = {
  status: STATUS.FAILURE_0,
  message: ``,
  data: null,
  error: null,
};

export const RESPONSE_STATUS = Object.freeze({
  OK_200: 200,
  CREATED_201: 201,
  BAD_REQUEST_400: 400,
  UNAUTHORIZED_401: 401,
  FORBIDDEN_403: 403,
  NOT_FOUND_404: 404,
  INTERNAL_SERVER_ERROR_500: 500,
});

export const SEQUELIZE_UNIQUE_CONSTRAINT_ERROR =
  "SequelizeUniqueConstraintError";
