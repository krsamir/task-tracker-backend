import express from "express";
import appController from "../controller/appController.js";

const appRouter = express.Router();

appRouter
  .route("/")
  .get(appController.getTemplate)
  .post(appController.createTemplate);

export default appRouter;
