import express from "express";
import { config } from "dotenv";
import { info } from "logger";
import appRouter from "./app/routes/appRoutes.js";

config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", appRouter);

app.listen(PORT || 4000, () =>
  info(`Application started on PORT ${PORT} at ${new Date().toLocaleString()}`)
);
