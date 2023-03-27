import { green, log } from "./index.js";
import { config } from "dotenv";
config();

const requestLogger = (req, res, next) => {
  const { url, method, body } = req;
  if (url.match("/api")) {
    green(
      `METHOD: [${method}] | ROUTE:[${url}] | [${new Date().toLocaleString()}] `
    );
  }
  if (process.env.NODE_ENV === "development" && method !== "GET") {
    log(`Payload`);
    log(body);
  }
  next();
};

export default requestLogger;
